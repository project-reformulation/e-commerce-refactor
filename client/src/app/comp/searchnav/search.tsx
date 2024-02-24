"use client"
import React, { useState,ChangeEvent } from 'react';
import axios from 'axios';


interface Product {
  id:number;
  productName:string;
  rating:number;
  price:number;
  description?:string;
  available:string;
  imageUrl?:string[];
  categories?:string[];
  UserId: number;
}

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>(`http://localhost:3000/cart/product?query=${search}`);
      setProducts(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching results:', error);
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const onSearchIconClick = () => {
    handleSearch()
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <input
          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-45 py-1 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm"
          id="username"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-3 mr-1 h-4 w-4 text-gray-400 hover:text-gray-500 hover:semibold cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={onSearchIconClick}
        
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

    
      <div className="absolute left-0 inset-y-0 flex items-center ">
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1 text-gray-400 hover:text-gray-500 hover:semibold hover:drop-shadow-xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onSearchIconClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {loading && <p>Loading...</p>}
        {selectedProduct && </*Component of product details*/product={selectedProduct}/>}
        {products.length > 0 && (
        <div className="search-results">
            {products.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product)}>
                <h3>{product.productName}</h3>
              </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Search;