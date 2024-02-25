"use client"
import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import axios from "axios";

interface Product {
  idproduct: string;
  promop: number;
  namep: string;
  pricep: number;
  ratingp: number;
}

function Explore(): JSX.Element {
  const [product, setProduct] = useState<Product[]>([]);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:8000/user/allprodect");
        const productsData = response.data.slice(0, 8);
        setProduct(productsData);

        const imageUrls = await Promise.all(productsData.map(async (item) => {
          try {
            const res = await axios.get<{ imageurl: string }>(`http://localhost:8000/cart/image/${item.idproduct}`);
            return res.data[0].imageurl;
          } catch (error) {
            console.log(error);
            return "";
          }
        }));
        setImages(imageUrls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>
      <div className="flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="justify-start items-end gap-[611px] inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
              </div>
              <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
            </div>
            <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Explore Our Products</div>
          </div>
          <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
            <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All</div>
          </div>
        </div>
        <div style={{ width: "80%", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {product.map((e, i) => (
            <div key={e.idproduct} className="justify-center items-center gap-[30px] inline-flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                  <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                      -{e.promop}%
                    </div>
                  </div>
                  <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
                  <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
                  <Link href='/components/cart'>Add To Cart</Link>
                  </div>
                  <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <IoMdHeartEmpty />
                        </IconContext.Provider>
                      </div>
                      <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex"></div>
                    </div>
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
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
                    <img className="w-[191px] h-[101px]" src={images[i]} alt={`Product ${i + 1}`} />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    {e.namep}
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                      {e.pricep - (e.pricep * e.promop / 100)}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                      {e.pricep}
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex"><CiStar /> <CiStar /><CiStar /><CiStar /></div>
                    <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                      ({e.ratingp})
                    </div>
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

export default Explore;
