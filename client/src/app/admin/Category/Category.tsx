"use client "
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Link from 'next/link';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  interface Categorylist {
    idcategory: number;
    name: string;
    productCount:any
  }

 

  const Category: React.FC = () => {
    const [categories, setCategories] = useState<Categorylist[]>([]);
    const [newCategoryName, setNewCategoryName] = useState<string>("");
    const [showAddForm, setShowAddForm] = useState<boolean>(false);

    useEffect(() => {
        axios.get<Categorylist[]>(`http://localhost:8000/admin/getAllCategory`)
          .then((res) => {
            const categoriesWithProductCounts = res.data.map(async (category) => {
                console.log(category);
                
              const productResponse = await axios.get<Categorylist[]>(`http://localhost:8000/admin/ProductInThatCategory/${category.idcategory}`);
              const productCount = productResponse.data.length;
              console.log(productResponse);
              return { ...category, productCount };
            });
            Promise.all(categoriesWithProductCounts)
              .then((categoriesWithCounts) => {
                setCategories(categoriesWithCounts);
              });
          })
          .catch((err) => {
            console.log('Error fetching category data:', err);
          });
      }, []);

      const handleDeleteCategory = (id: number) => {
        axios.delete(`http://localhost:8000/admin/deleteCategory/${id}`).then((res) => {
          console.log("Deleted category");
        })
          .catch((err) => {
            console.log(err);
          });
      };

 const handleAddCategory = () => {
    axios.post(`http://localhost:8000/admin/createCategory`, {
      name: newCategoryName
    }).then((res) => {
      console.log('Category created');
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="flex">
      <div className="w-1/4">
     <Sidebar/> 
  </div>
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Category List</h2>
      <button
  onClick={() => setShowAddForm(true)}
  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:shadow-outline-blue"
>
  Add Category ➕
</button>
      {showAddForm && (
        <div className="mb-4">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Enter category name"
          />
          <button
  onClick={() => { handleAddCategory(), window.location.reload() }}
  className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
>
  Add ➕
</button>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Category Name</th>
              <th className="px-4 py-2">Number of Products</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.idcategory}>
                <td className="border px-4 py-2">{category.name}</td>
                <td className="border px-4 py-2">{category.productCount}</td>
                <td className="border px-4 py-2">
                <button
  
  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
>
  <Link href={`productList/${category.idcategory}`}> View Products </Link>
</button>
                  {/* <Link
                    to={`/categories/${category.idcategory}/edit`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </Link> */}
                <button
  onClick={() => { handleDeleteCategory(category.idcategory); window.location.reload(); }}
  className="bg-red-500 hover:bg-red-600 text-gray-700 font-bold py-2 px-4 rounded"
>
  Delete 
</button>




                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Category
