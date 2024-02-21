"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "../footer/page.tsx";
import Nav from "../nav/page.tsx";
import { useParams } from 'react-router-dom';
import Link from "next/link";
import axios from "axios";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [pq, setPq] = useState([]);
    const [image, setImage] = useState([]);
    const [idc,setIdc]=useState(0)
    const { id } = useParams()
    
    useEffect(() => {
    const Data = async () => {
        try {
        const cartt = await axios.get(`http://localhost:8000/cart/getcart/${id}`);
        setIdc(cartt.data[0].idcart)
        const carthasproduct = await axios.get(
            `http://localhost:8000/cart/carthasp/${cartt.data[0].idcart}}`
        );
        // /oneproduct/:id
        const array = [];
        const t = [];
        const img = [];

        for (let i of carthasproduct.data) {
            let product = await axios
            .get(`http://localhost:8000/cart/oneproduct/${i.product_idproduct}`)
            .then((res) => {
                array.push(res.data[0]);
                t.push(i);
            })
            .catch((err) => console.log(err));
            let productimg = await axios
            .get(`http://localhost:8000/cart/image/${i.product_idproduct}`)
            .then((reslt) => {
                img.push(reslt.data[0]);
            })
            .catch((err) => console.log(err));
        }
        setProducts(array);
        setPq(t);
        setImage(img);
        } catch (err) {
        console.log(err);
        }
    };
    Data();
}, []);
    const upd = async () => {
    try {
        const carttt = await axios.get(`http://localhost:8000/cart/getcart/${id}`);
        const x = carttt.data[0];
        x.status = "end";

        const u = await axios
        .put(
            `http://localhost:8000/cart/updatecart/${carttt.data[0].idcart}`,
            x
        )
        .then((res) => {
            console.log("updated", res.data);
        });
    } catch (err) {
        console.log(err);
    }
    const obj = {
        status: "encours",
        user_iduser: "1",
    };
    axios
        .post("http://localhost:8000/cart/createcart", obj)
        .then(() => {
        console.log("create card");
        })
    .catch((err) => console.log(err, "gvhbhb"));
};
    const inc = (Id) => {
    setPq((x) => {
        const updatedPq = x.map((product) =>
        product.product_idproduct === Id
            ? { ...product, quantitycp: product.quantitycp + 1 }
            : product
        );
        return updatedPq;
    });
    };

    const dec = (Id) => {
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

    return (
    <>
    <Nav/>
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
                Price
                </div>
                <div className="text-black font-medium w-16 h-12">quantity</div>
                <div className="text-black font-medium w-16 h-12">Subtotal</div>
            </div>
            {products.map((product, k) => (
                <div className="flex justify-between items-center mt-8" key={k}>
                <div className="flex items-center gap-4">
                    <img className="w-40 h-40" src={image[k].imageurl} alt="" />
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
                    <span className="mx-2 w-20">{pq[k].quantitycp}</span>
                    <button
                    className="border border-black rounded px-2"
                    onClick={() => inc(product.idproduct)}
                    >
                    +
                    </button>
                </div>
                <div>${calculateSubtotal(product, pq[k].quantitycp)}</div>
                </div>
            ))}
            </div>
            <div className="flex justify-between items-center w-full mt-6">
            <button className="border border-black rounded px-4 py-2" onClick={()=>{
                <Link href={`${id}`}></Link>
            }}>
                Return To Shop
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
        <Link href={`${id}`}></Link>
                }}
                >
                Proceed to Checkout
                </button>

            </div>
            </div>
        </div>
        </div>
    </main>
    <Footer/>
        
    </>
);
};

export default Cart;
