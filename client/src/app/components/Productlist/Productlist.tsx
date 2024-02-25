"use client";

import React, { useState,useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import { Popconfirm } from "antd";
import Product from "@/app/HomeComponents/Product/page";



const ProductList = () => {
  const [product, setProduct] = useState({});
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalEditOpen, setEditOpen] = useState<boolean>(false);
  const [products, setProducts] = useState([]);
  const [updatedProducts,setUpdatedProducts]=useState<[]>()
  useEffect(() => {
    axios.get('http://localhost:8000/seller/AllProduct')
      .then((res) => {
  setProducts(res.data);
        setUpdatedProducts(res.data);
      })
      .catch((err) => {
        console.log('Error fetching products:', err);
      });
  }, []);

  const deleteProduct = (idproduct: string) => {
    axios
      .delete(`http://localhost:8000/seller/deleteProduct/${idproduct}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== idproduct));
      })
      .catch((err) => {
        console.log("Error deleting product:", err);
      });
  };

  const handleQuantityChange = (idproduct: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const newProducts = [...updatedProducts];
    const productIndex = newProducts.findIndex(product => product.id === idproduct);
    if (productIndex !== -1) {
      newProducts[productIndex].quantity = parseInt(value);
      setUpdatedProducts(newProducts);
      axios.put(`http://localhost:8000/seller/manageStock/${idproduct}`, { quantity: parseInt(value) })
        .then(response => {
          console.log('Quantity updated successfully');
        })
        .catch(error => {
          console.error('Error updating quantity:', error);
          // Reset quantity back to previous value
          newProducts[productIndex].quantityp = products[productIndex].quantityp;
          setUpdatedProducts(newProducts);
        });
    }
  };

  return (
    <>
      <div
        className="h-full w-full"
        style={{ marginTop: "2%", overflowX: "auto" }}
      >
        <div className="flex justify-end items-center p-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <IoAddOutline />
            Add Product
          </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Description
                </th>

                <th scope="col" className="px-6 py-3 font-medium">
                  Size
                </th>

                <th scope="col" className="px-6 py-3 font-medium">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Price Promo
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod: Product) => (
                <tr
                  key={prod.idproduct}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-4">
                    <Image
                      src={prod.imageurl}
                      alt="product"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.namep}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.color}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.descriptionp}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.sizep}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.quantityp}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.pricep}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span>{prod.promop}</span>
                  </td>
                  <td className="px-6 py-4">
                    <AiOutlineEdit
                      className="text-2xl text-green-500"
                      onClick={() => {
                        setProduct(prod);
                        setEditOpen(true);
                      }}
                    />
                    <Popconfirm
                      placement="left"
                      title="Delete the Product?"
                      description="Are you sure to delete this Product?"
                      onConfirm={() => deleteProduct(prod.id)}
                      okText="Yes"
                      cancelText="No"
                      okButtonProps={{ className: "text-white bg-red-500" }}
                    >
                      <MdOutlineDelete className="text-2xl text-red-500" />
                    </Popconfirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdd open={modalIsOpen} closeModal={() => setIsOpen(false)} />
      <ModalEdit
        open={modalEditOpen}
        closeModal={() => setEditOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductList;
