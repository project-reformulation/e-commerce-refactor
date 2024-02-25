"use client"

import ProductListByCategory from "./ProductListByCategory/page" 

const page = ({params}:{params:any}) => {
  console.log("eeeeee",params.idproduct);
  
  
  return (
    <div>
        <ProductListByCategory idd={params.idproduct}/> 
    </div>
  )
}

export default page
