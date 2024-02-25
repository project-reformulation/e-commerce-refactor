import React from "react";

const page: React.FC =({params})=>{

    console.log("gggg",params.idadmin);
    
  
return (
    
<div>admin + {params.idadmin}</div>)


}

export default page