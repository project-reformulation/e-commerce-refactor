"use client";
import React, { useEffect, useState } from "react";
import './Cart.css'
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

const Cart: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [pq, setPq] = useState<Array>([]);
    const [image, setImage] = useState([]);
    const [idc, setIdc] = useState(0);
    const [id, setId] = useState<number>(1);
    


const fetchData = async () => {
    try {
    const cartResponse = await axios.get(
        `http://localhost:8000/cart/getcart/${id}`
    );
        console.log(cartResponse.data);
        setProducts(cartResponse.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

    const upd = async () => {
    console.log(id);
    try {
        const cartResponse = await axios.get(
        `http://localhost:8000/cart/getcart/${id}`
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

const inc = (id: number) => {
    setPq((x) => {
        const updatedPq = x.map((product) =>
            product.idproduct === Id
                ? { ...product, quantitycp: product.quantitycp + 1 }
                : product
        );
        return updatedPq;
    });
};


const dec = (id: number) => {
    setPq((x) => {
        const updatedPq = x.map((product) =>
            product.idproduct === Id && product.quantitycp > 1
                ? { ...product, quantitycp: product.quantitycp - 1 }
                : product
        );
        return updatedPq;
    });
};


    const calculateSubtotal = (product: any, qc: number) => {
    return product.pricep * qc;
};

const calculateTotal = () => {
    return products.reduce(
        (total, product) =>
            total + calculateSubtotal(product, product.quantitycp),
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
                <div className="text-black my-10 h-10 text-lg justify-start items-center gap-4 flex">
                    <div className="opacity-50 font-normal font-['Poppins'] leading-tight">
                        Home
                    </div>
                    <div className="w-4 h-px  rotate-[117.05deg] opacity-50 border border-black"></div>
                    <div className=" font-normal font-['Poppins']">Cart</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="w-full bg-white rounded shadow p-6">
                        <div className="flex w-full justify-between items-center gap-8">
                            <div className="text-black font-medium w-16 h-12">Product</div>
                            <div className="text-black font-medium w-16 h-12 ml-52">
                                <h1>Price</h1>
                            </div>
                            <div className="text-black font-medium w-16 h-12">quantity</div>
                            <div className="text-black font-medium w-16 h-12">Subtotal</div>
                        </div>
                        {products.map((product: Product, index) => {
                            console.log(product);
                            return (
                                <div
                                    className="flex justify-between items-center mt-8"
                                    key={index}
                                >
                                    <div className="flex items-center gap-4">
                                {image.map((img, imgIndex) => (
                                <img key={imgIndex} className="w-40 h-40" src={img.imageurl} alt="" />
                                ))}

                                        <div className="w-24 h-12">{product.namep}</div>
                                    </div>

                                    <div className="w-16 h-12">${product.pricep}</div>

                                    <div className="flex items-center w-14 h-12">
                                        <button
                                            className="border border-black rounded px-2"
                                            onClick={() => dec(product.idproduct)}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2 w-20">{pq[index] && pq[index].quantitycp}</span>
                                        <button
                                            className="border border-black rounded px-2"
                                            onClick={() => inc(product.idproduct)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>${calculateSubtotal(product, pq[index]?.quantitycp)}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between items-center w-full mt-6">
                        <button
                            className="border border-black rounded px-4 py-2"
                            onClick={() => <Link href={(`${id}`)}> </Link>}
                        >
                            <Link href="/"> return to Shop</Link>
                        </button>
                        <button className="border border-black rounded px-4 py-2">
                            Update Cart
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <div className="border border-black rounded px-4 py-2">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="outline-none"
                            />
                        </div>
                        <button className="bg-red-500 text-white rounded mx-4 px-4 py-2">
                            Apply Coupon
                        </button>
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="bg-white rounded shadow p-6 mt-6 flex-col justify-end">
                            <div className="text-xl font-medium">Cart Total</div>
                            <div className="flex justify-between items-center mt-4">
                                <div>Subtotal:</div>
                                <div>${calculateTotal()}</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>Shipping:</div>
                                <div>Free</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>Total:</div>
                                <div>${calculateTotal()}</div>
                            </div>

                            <button
                                className="bg-red-500 text-white rounded px-4 py-2 mt-6"
                                onClick={() => {
                                    upd();
                                    <Link href={(`${id}`)}> </Link>
                                }}
                            >
                                Proceed to Checkout
                            </button>
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