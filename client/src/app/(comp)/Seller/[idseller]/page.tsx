import React from "react";

const page: React.FC =({params})=>{

    console.log("gggg",params.idseller);
    
  
return (
    
<div>seller + {params.idseller}</div>)


}

export default page