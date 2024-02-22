'use client'

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Typography } from "@mui/material";

interface Product {
  id: string;
  namep: string;
  sizep: string;
  ratingp: number;
  quantityp: number;
  pricep: number;
}

const TABLE_HEAD: string[] = ["Product", "Size", "Rating", "Quantity", "Price", "", ""];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
  
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

  const deleteProduct = (id: string) => {
    axios.delete(`http://localhost:8000/seller/deleteProduct/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
        setUpdatedProducts(updatedProducts.filter(product => product.id !== id));
      })
      .catch((err) => {
        console.log('Error deleting product:', err);
      });
  };

  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    const stars: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={i < roundedRating ? styles.filledStar : styles.emptyStar}>
          ★
        </span>
      );
    }
    return stars;
  };

  const styles = {
    filledStar: {
      color: '#FFD700',
    },
    emptyStar: {
      color: '#ccc',
    },
    starRating: {
      marginTop: '10px',
    },
  };

  const handleQuantityChange = (id: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const newProducts = [...updatedProducts];
    const productIndex = newProducts.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      newProducts[productIndex].quantityp = parseInt(value);
      setUpdatedProducts(newProducts);
      axios.put(`http://localhost:8000/seller/manageStock/${id}`, { quantity: parseInt(value) })
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
    <Card className="h-full w-full" style={{ marginTop: "2%", overflowX: "auto" }}>
       
      <table className="w-full min-w-max table-auto text-left">
        <thead className="text-xs text-white uppercase bg-black dark:bg-black dark:text-white-400">
          <tr>
            {TABLE_HEAD.map((item, index) => (
              <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  className="text-white text-2xl font-bold font-['Inter'] leading-normal tracking-wide"
                  
                >{item}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {updatedProducts.map((oneProduct) => (
            <tr key={oneProduct.id}>
                {oneProduct.namep}
             </tr>
          ))}
        </tbody>
      </table>  
    </Card>
  );
};

export default ProductList;
