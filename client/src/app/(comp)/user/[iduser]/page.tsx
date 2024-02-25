import React from "react";

const page: React.FC =({params})=>{

    console.log("gggg",params.iduser);
    
  
return (
    
<div>user + {params.iduser}</div>)


}

export default page