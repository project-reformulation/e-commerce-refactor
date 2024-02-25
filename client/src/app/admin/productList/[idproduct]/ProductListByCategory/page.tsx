"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';
import Sidebar from '@/app/admin/Sidebar';
interface Product {
  id: number;
  namep: string;
  pricep: number;
  descriptionp: string;
  quantityp:string;
}
interface ProductListByCategoryId{
 idd:number
}
const ProductListByCategory = ({idd}:ProductListByCategoryId) => {
  
  console.log("idddddd",idd);
  
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (idd) {
      axios
        .get<Product[]>(`http://localhost:8000/admin/ProductInThatCategory/${idd}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log('Error fetching products:', err);
        });
    }
  }, [idd]);

  return (
    <div className="flex h-screen">
    <div className="w-1/4 p-6">
      <Sidebar />
    </div>
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Products in Category</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.namep}</td>
                <td className="border px-4 py-2">{product.pricep}</td>
                <td className="border px-4 py-2">{product.descriptionp}</td>
                <td className="border px-4 py-2">{product.quantityp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  );
};
export default ProductListByCategory;
