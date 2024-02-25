"use client"
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
// import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams, useNavigate } from 'react-router-dom';
import ProductCountdown from "../Productcountdown/page";
import React, { useEffect, useState } from "react";

function Sales(): JSX.Element {
//   const navigate = useNavigate();
  const [product, setProduct] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [wishList, setWishList] = useState<boolean[]>([]);
//   const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/allprodect");
        const data = response.data.slice(0, 4);
        setProduct(data);

        const imageArray: string[] = [];
        const wishListArray: boolean[] = [];
        for (const item of data) {
          const imageResponse = await axios.get(`http://localhost:8000/cart/image/${item.idproduct}`);
          imageArray.push(imageResponse.data[0].imageurl);
          wishListArray.push(false);
        }

        setImages(imageArray);
        setWishList(wishListArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (productId: number) => {
    try {
      const cartResponse = await axios.get(`http://localhost:8000/cart/getcart/${id}`);
      const cartId = cartResponse.data.length > 0 ? cartResponse.data[0].idcart : null;

      if (cartId) {
        const cartItem = {
          quantitycp: 1,
          cart_idcart: cartId,
          product_idproduct: productId,
        };
        await axios.post("http://localhost:8000/cart/carthasp", cartItem);
      } else {
        const cartObject = {
          status: "encours",
        //   user_iduser: id,
        };
        const createdCartResponse = await axios.post("http://localhost:8000/cart/createcart", cartObject);
        const createdCartId = createdCartResponse.data.idcart;
        const cartItem = {
        //   quantitycp: id,
          cart_idcart: createdCartId,
          product_idproduct: productId,
        };
        await axios.post("http://localhost:8000/cart/carthasp", cartItem);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const addToWishList = async (productId: number, index: number) => {
    const wishListObject = {
    //   user_iduser: id,
      product_idproduct: productId,
    };

    if (!wishList[index]) {
      await axios.post("http://localhost:8000/cart/addwhis", wishListObject);
    } else {
      await axios.delete("http://localhost:8000/cart/delwhis", { data: wishListObject });
    }

    setWishList(prev => {
      const updatedList = [...prev];
      updatedList[index] = !prev[index];
      return updatedList;
    });
  };

  return (
    <div style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}>
      <div className="flex-col justify-center items-center gap-10 inline-flex">
        <div className="justify-center items-end gap-[470px] inline-flex">
          <div className="justify-start items-end gap-[87px] flex">
            <div className="h-[103px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                  <div className="w-5 h-10 bg-red-500 rounded"></div>
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
                  Today’s
                </div>
              </div>
              <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
                Flash Sales
              </div>
            </div>
            {/* timer down */}
            <ProductCountdown />
          </div>
          {/* arrow left and right */}
          <div className="justify-start items-start gap-2 flex">
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
          </div>
        </div>
        <div className="w-[1308px] justify-center items-start gap-[30px] inline-flex">
          {/* the card of item */}
          {product.map((item, index) => (
            <div className="flex-col justify-start items-start gap-4 inline-flex" key={index}>
              <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                    -{item.promop}%
                  </div>
                </div>
                <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
                <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal" onClick={() => {
                  addToCart(item.idproduct);
                }}>
                  Add To Cart
                </div>
                <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[34px] h-[34px] relative">
                    <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center" onClick={() => {
                      addToWishList(item.idproduct, index);
                    }}>
                      <button>
                        <FiHeart className={wishList[index] ? "text-red-500 w-28  h-8" : "text-black w-28  h-8"} />
                      </button>
                    </div>
                    <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex"></div>
                  </div>
                  <div className="w-[34px] h-[34px] relative">
                    <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                      <IconContext.Provider value={{ size: "1.5em" }}>
                        <FaEye />
                      </IconContext.Provider>
                    </div>
                    <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                      <div className="w-[19.23px] h-3.5 relative"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                  <img className="w-[191px] h-[101px]" src={images[index]} onClick={() => navigate(`/product/${id}/${item.idproduct}`)} />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                  {item.namep}
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    {item.pricep - (item.pricep * item.promop / 100)}
                  </div>
                  <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                    {item.pricep}
                  </div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-start flex">
                    <CiStar /> <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                    ({item.ratingp})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sales;
