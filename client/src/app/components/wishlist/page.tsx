"use client"
// import Nav from "../Nav";

import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../footer/page.tsx";
import axios from "axios";

const Wishlist:React.FC=()=> {
    const [product, setProduct] = useState([]);
        const [images, setImages] = useState([]);
    const { id } = useParams();
    const fetchData = async () => {
        const Data = async () => {
            try {
            const fs = await axios.get(`http://localhost:8000/cart/allwhis/${id}`);
            const array =[]
            for (const i of fs.data) {
                const pr = await axios.get(
                `http://localhost:8000/cart/someproduct/${i.product_idproduct}`
                );
                array.push(pr.data[0]);
            }
            setProduct(array);
            console.log(array);
            for (const i of array) {
                await axios
                .get(`http://localhost:8000/cart/image/${i.idproduct}`)
                .then((res) => {
                    array.push(res.data[0].imageurl);
                })
                .catch((err) => console.log(err));
            }
            setImages(array);
            } catch (err) {
            console.log(err);
            }
        };
        Data();
        };
    useEffect(() => {
        fetchData()
    }, []);
    return (
    <>
<main>      
    {/* <Nav /> */}
        <div
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
        >
        <div className="w-[1170px] h-[984px] flex-col justify-center items-start gap-20 inline-flex">
            <div className="flex-col justify-start items-start gap-[60px] flex">
            <div className="justify-start items-center gap-[835px] inline-flex">
                <div className="text-center text-black text-xl font-normal font-['Poppins'] leading-relaxed">
                Wishlist (4)
                </div>
                <div className="px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    Move All To Bag
                </div>
                </div>
            </div>
            <div className="justify-start items-start gap-[30px] inline-flex">
                {
                product.map((item, index) => {
                    return(
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                    <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
                    <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                        <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                        <div className="w-6 h-6 px-1 py-[3px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                        <MdDelete />
                        </div>
                    </div>
                    </div>
                    <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                        -{item.promop}%
                    </div>
                    </div>
                    <div className="w-[190px] h-[180px] px-1.5 pt-[26px] pb-[25px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                    <img
                        className="w-[178px] h-[129px]"
                        src={images[index]}
                    />
                    </div>
                    <div className="left-[83.50px] top-[217px] absolute justify-center  items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-white text-xs font-normal font-['Poppins'] leading-[18px]">
                        Add To Cart
                    </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                {item.namep}
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                    <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                        ${item.pricep-(item.pricep*item.promop)}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                        ${item.pricep}
                    </div>
                    </div>
                </div>
                </div>
                    ) 
                })
                }
            </div>
            </div>
            <div className="flex-col justify-start items-start gap-[60px] flex">
            <div className="justify-start items-center gap-[864px] inline-flex">
                <div className="justify-start items-center gap-4 flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                    <div className="w-5 h-10 bg-red-500 rounded" />
                </div>
                <div className="text-center text-black text-xl font-normal font-['Poppins'] leading-relaxed">
                    Just For You
                </div>
                </div>
                <div className="px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    See All
                </div>
                </div>
            </div>
            <div className="justify-start items-start gap-[30px] inline-flex">
                {
                product.slice(0,4).map((e,i)=>{
                    return(
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                    <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
                    <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                        <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                        <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                        <div className="w-[19.23px] h-3.5 relative">
                            <FaEye />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                        -{e.promop}%
                    </div>
                    </div>
                    <div className="left-[85px] top-[218px] absolute justify-center  items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-white text-xs font-normal font-['Poppins'] leading-[18px]">
                        Add To Cart
                    </div>
                    </div>
                    <div className="w-[190px] h-[180px] px-4 py-[7px] left-[40px] top-[22px] absolute justify-center items-center inline-flex">
                    <img
                        className="w-[158px] h-[166px]"
                        src={images[i]}
                    />
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    {e.namep}
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                    <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                        ${e.pricep-(e.pricep*e.promop)}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                        ${e.pricep}
                    </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex" />
                    <CiStar />
                    <CiStar />
                    <CiStar />

                    <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                        {e.ratingp}
                    </div>
                    </div>
                </div>
                </div>
                    )
                })
                }
            </div>
            </div>
        </div>
        </div>
        <Footer />
        </main>
    </>
    );
}
export default Wishlist;