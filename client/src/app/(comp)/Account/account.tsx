"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation"




function Account() {
  const {push}=useRouter();
  const [name,setName]=useState<string>('');
  const [lastname,setLastName]=useState<string>('');
  const [image,setImage]=useState<string>('');
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const [newPass,setNewpass]=useState<string>('');
  const [valispass,setValidpass]=useState<string>('');
  const [iduser,setid]=useState<string|null>(null);
  const [token,setToken]=useState<string|null>(null)
  const [id, setId] = useState(null);
  console.log(iduser, 'the token decoded');
  
  console.log(token,"hethaaay");
   
  
      useEffect(() => {
        const allCookies= Cookies.get('token');
      
        console.log('All Cookies:', allCookies);
        allCookies && setToken(allCookies)
      const decodedToken = jwtDecode(allCookies);
        setId(decodedToken);
    
       
      }, [])
  const header={
    headers: {
          Authorization : `Bearer ${token}`
      }
     
  }


  const updati = () => {
    axios
      .put(
        `http://localhost:8000/auth/update/${iduser.iduser}`,
        {
          name: name,
          lastname: lastname,
          email: email,
          image: image,
          password: password,
          newPassword: newPass,
        }, {headers: {
          Authorization : `Bearer ${token}`
      }
    }
      )
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const uplodeimages = async () => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset','z7bg588b');

      const res = await axios.post('https://api.cloudinary.com/v1_1/dhvwa9hnm/image/upload', formData);

      console.log("this is the url", res.data.secure_url);
      await axios.put("http://localhost:3600/user/updateImage", {
        id: decToken.user[0].iduser,
        image: res.data.public_id || res.data.secure_url
      }, {headers: {
        Authorization : `Bearer ${token}`
    } 
  });

      

    } catch (error) {
      console.error(error);
    }
  };

  

  const handelchange = () => {
    updati();
  };
  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
      console.log(setImage, "this is imageeee")
    }
  };
  return (

    <div>
<div className="Account w-[1437px] h-[1533px] relative bg-white">
  
  
      
  <div className="Line3 w-[1440px] h-[0px] left-0 top-[142px] absolute justify-center items-center inline-flex"  style={{ top: '50px' }}>
    <div className="Line3 w-[1440px] h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
  </div>
  
<div className="WelcomeMdRimel left-[1163px] top-[222px] absolute">
  <span style={{ color: 'black', fontSize: 'small', fontFamily: 'Poppins', lineHeight: '21px' }}>Welcome! </span>
  <span style={{ color: 'red', fontSize: 'small', fontFamily: 'Poppins', lineHeight: '21px' }}></span>
</div>

  <div className="MyWishlist w-[93px] h-[23px] left-[135px] top-[587px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My WishList</div>
  <div className="Frame839 left-[170px] top-[363px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="MyProfile text-red-500 text-base font-normal font-['Poppins'] leading-normal">My Profile</div>
    <div className="AddressBook opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Address Book</div>
    <div className="MyPaymentOptions opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Payment Options</div>
  </div>
  <div className="Frame840 left-[170px] top-[515px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="MyReturns opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Returns</div>
    <div className="MyCancellations opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Cancellations</div>
  </div>
  <div className="Frame838 w-[870px] h-[630px] left-[434px] top-[323px] absolute bg-white rounded shadow">
    <div className="EditYourProfile left-[80px] top-[40px] absolute text-red-500 text-xl font-medium font-['Poppins'] leading-7">Edit Your Profile</div>
    <div className="Frame848 left-[80px] top-[84px] absolute justify-start items-start gap-[50px] inline-flex">
  <div className="Frame841 flex-col justify-start items-start gap-2 inline-flex">
    <div className="FirstName text-black text-base font-normal font-['Poppins'] leading-normal">First Name</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <div className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="text"
        placeholder="Md"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
  </div>
  <div className="Frame842 flex-col justify-start items-start gap-2 inline-flex">
    <div className="LastName text-black text-base font-normal font-['Poppins'] leading-normal">Last Name</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <div className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="text"
        placeholder="Rimel"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setLastName(e.target.value)}}
      />
    </div>
  </div>
</div>

    <div className="Frame849 left-[80px] top-[190px] absolute justify-start items-start gap-[50px] inline-flex">
  <div className="Frame843 flex-col justify-start items-start gap-2 inline-flex">
    <div className="Email text-black text-base font-normal font-['Poppins'] leading-normal">Email</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="text"
        placeholder="rimel1111@gmail.com"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
  </div>
  <div className="Frame844 flex-col justify-start items-start gap-2 inline-flex">
    <div className="Address text-black text-base font-normal font-['Poppins'] leading-normal">image</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="file"
        placeholder="image"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={handleFileChange} 
      />

    </div>
  </div>
</div>

<div className="Frame846 left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
  <div className="Frame845 flex-col justify-start items-start gap-2 flex">
    <div className="PasswordChanges text-black text-base font-normal font-['Poppins'] leading-normal">Password Changes</div>
    <div className="PlaceboxInfo w-[710px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="password"
        placeholder="Current Password"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
  </div>
  <div className="PlaceboxInfo w-[710px] h-[50px] relative">
    <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
    <input
      type="password"
      placeholder="New Password"
      className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
      style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
      onChange={(e)=>{setNewpass(e.target.value)}}
    />
  </div>
  <div className="PlaceboxInfo w-[710px] h-[50px] relative">
    <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
    <input
      type="password"
      placeholder="Confirm New Password"
      className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
      style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
      onChange={(e)=>{setValidpass(e.target.value)}}
    />
  </div>
</div>

<div className="Frame847 left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
 
  <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
  
  <button className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal" onClick={() => { handelchange(); uplodeimages(); push("/") ;alert("Data Update ") }}>Save Changes</button>

</div>

</div>

  </div>
  
</div>

    </div>
  )
}

export default Account
