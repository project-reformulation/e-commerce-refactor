"use client";
import React, { useEffect, useState } from "react";

import Footer from "../footer/page.tsx";
import Nav from "../nav/page.tsx";

import Link from "next/link";
import axios from "axios";
interface Product {
    idproduct: number;
    namep: string;
    descriptionp: string;
    sizep: string;
    quantityp: number;
    ratingp: number;
    pricep: number;
    promop: number;
    user_iduser: number;
}

interface Image {
    idimage:number;
    imageurl: String;
    product_idproduct: number;
}
const Cart: React.FC = () => {
    const [products, setProducts] = useState([]);

    const [images, setImage] = useState([]);
    const [idc, setIdc] = useState(0);
    const [id, setId] = useState<number>(1);
    const [pq, setPq] = useState<{ product_idproduct: number; quantitycp: number }[]>([]);
    const [message, setMessage] = useState<string>("");
const fetchData = async () => {
    try {
    const cartResponse = await axios.get(
        `http://localhost:8000/cart/getcart/1`
    );
        console.log(cartResponse.data);
        setProducts(cartResponse.data);
        const initialPq = cartResponse.data.map((product: Product) => ({
            product_idproduct: product.idproduct,
            quantitycp: 0, 
        }));
        setPq(initialPq);
        const productIds = cartResponse.data.map((product: Product) => product.idproduct);

        const imagesResponse = await Promise.all(productIds.map(productId =>
            axios.get(`http://localhost:8000/cart/image/2`)
        ));

        const imageUrls = imagesResponse.map(response => response.data.imageurl);
        setImage(imageUrls);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

    const upd = async () => {
    console.log(id);
    try {
        const cartResponse = await axios.get(
        `http://localhost:8000/cart/getcart/1`
    );
        if (cartResponse.data && cartResponse?.data?.length > 0) {
        const cartData = cartResponse?.data[0];
        cartData.idcart= 1
        console.log(cartData.idcart, "cart id");
        cartData.status = "end";
        console.log(cartResponse.data,"hi");
        

        const updateResponse = await axios.put(
            `http://localhost:8000/cart/updatecart/${cartData.idcart}`,
            cartData
        );
        console.log("Updated cart:", updateResponse?.data);
        } else {
        console.error("Cart data not found");
        }
    } catch (error) {
        console.error("Error updating cart:", error);
    }

    const newCart = {
        status: "encours",
        user_iduser: "1",
    };

    axios
        .post("http://localhost:8000/cart/createcart", newCart)
        .then(() => {
        console.log("Created new cart");
        })
        .catch((err) => {
        console.error("Error creating cart:", err);
        });
};

const inc = (Id:number) => {
    setPq((x) => {
        const updatedPq = x.map((product) => {
            if (product.product_idproduct === Id && product.quantitycp < 10) {
                return { ...product, quantitycp: product.quantitycp + 1 };
            } else {
                return product;
            }
        });
        return updatedPq;
    });
    if (pq.find((product) => product.product_idproduct === Id)?.quantitycp === 9) {
        setMessage("You have reached the maximum quantity for this item.");
    } else {
        setMessage("");
    }
};



const dec = (Id:number) => {
    setPq((x) => {
        const updatedPq = x.map((product) =>
        product.product_idproduct === Id && product.quantitycp > 1
            ? { ...product, quantitycp: product.quantitycp - 1 }
            : product
        );
        return updatedPq;
    });
};

const calculateSubtotal = (product, qc) => {
    return product.pricep * qc;
};

const calculateTotal = () => {
    return products.reduce(
        (total, product, i) =>
        total + calculateSubtotal(product, pq[i].quantitycp),
        0
    );
    };


useEffect(() => {
    fetchData();
    upd();
}, []);

return (
    <>
        <Nav />
        <main>
        <div className="container mx-auto">
            <div className="my-10 flex items-center gap-4 text-sm text-gray-600">
                <div className="font-medium">Home</div>
                <div className="w-4 h-px bg-gray-400 transform -rotate-45"></div>
                <div className="font-medium">Cart</div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="bg-white rounded shadow-md p-6">
                    <div className="flex justify-between items-center mb-6 text-sm font-semibold">
                        <div className="w-1/3">Product</div>
                        <div className="w-1/6 text-center">Price</div>
                        <div className="w-1/6 text-center">Quantity</div>
                        <div className="w-1/6 text-center">Subtotal</div>
                    </div>
                    {products.map((product: Product, index) => (
                        <div className="flex justify-between items-center mb-4" key={index}>
                            <div className="flex items-center w-1/3 gap-4">
                            {images.map((image:Image, index) => (
    <img
        key={index}
        className="w-20 h-20 object-cover rounded"
        src={image?.imageurl}
        alt=""
    />
))}

                                <div>{product.namep}</div>
                            </div>
                            <div className="w-1/6 text-center">${product.pricep}</div>
                            <div className="flex items-center w-1/6 justify-center">
    <button className="text-gray-500 hover:text-gray-700" onClick={() => dec(product.idproduct)}>-</button>
    <span className="mx-2">{pq[index]?.quantitycp}</span>
    {pq[index]?.quantitycp === 9 && (
        <span className="text-red-500 font-bold">Max Quantity Reached</span>
    )}
    <button className="text-gray-500 hover:text-gray-700" onClick={() => inc(product.idproduct)}>+</button>
</div>
                            <div className="w-1/6 text-center">${calculateSubtotal(product, pq[index]?.quantitycp)}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                    <Link href="/">
                        Return to Shop
                    </Link>
                    <button className="border border-black rounded px-4 py-2" onClick={upd}>Update Cart</button>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <input type="text" placeholder="Coupon Code" className="border border-gray-400 rounded px-4 py-2 outline-none text-sm" />
                    <button className="bg-red-500 text-white rounded px-4 py-2">Apply Coupon</button>
                </div>
                <div className="flex justify-end mt-6">
                    <div className="bg-white rounded shadow-md p-6">
                        <div className="text-lg font-semibold mb-4">Cart Total</div>
                        <div className="flex justify-between items-center mb-2">
                            <div>Subtotal:</div>
                            <div>${calculateTotal()}</div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <div>Shipping:</div>
                            <div>Free</div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div>Total:</div>
                            <div>${calculateTotal()}</div>
                        </div>
                        <button className="bg-red-500 text-white rounded px-4 py-2 w-full">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer />
    </>
);
}

export default Cart