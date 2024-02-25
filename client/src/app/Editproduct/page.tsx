"use client"
import 'boxicons';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation, useNavigate } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import NavSeller from '../Navseller/page';
import { BsPlus } from 'react-icons/bs';

const EditProduct: React.FC = () => {
    // const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const productParam = queryParams.get('product');
    const product = productParam ? JSON.parse(decodeURIComponent(productParam)) : null;
    const [getCategory, setGetCategory] = useState<string>('');
    const [name, setName] = useState<string>(product?.namep || '');
    const [description, setDescription] = useState<string>(product?.descriptionp || '');
    const [size, setSize] = useState<string>(product?.sizep || '');
    const [quantity, setQuantity] = useState<string | number>(product?.quantityp || '');
    const [price, setPrice] = useState<string | number>(product?.pricep || '');
    const [promotion, setPromotion] = useState<string | number>(product?.promop) || '';
    const [color, setColor] = useState<string>('Red');
    const [category, setCategory] = useState<string>('Default Category');
    const [AllCategory, setAllCategory] = useState<any[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [newImageUrl, setNewImageUrl] = useState<any>('');
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const [imagesUrl, setImagesUrl] = useState<string[]>([]);
    const [imagesId, setImageId] = useState<number[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/admin/getAllCategory")
            .then((res) => {
                setAllCategory(res.data);
            })
            .catch((err) => {
                console.log("Error fetching category data", err);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8000/seller/getAllImages/${product.idproduct}`)
            .then((res) => {
                const data = res.data;
                const urls: string[] = [];
                const ids: number[] = [];
                for (let i = 0; i < data.length; i++) {
                    urls.push(data[i].imageurl);
                    ids.push(data[i].idimage);
                }
                setImagesUrl(urls);
                setImageId(ids);
            })
            .catch((err) => {
                console.error('Error fetching images:', err);
            });
    }, []);

    const GetCategoryByname = () => {
        axios.get(`http://localhost:8000/seller/getCategoryById/${product.category_idcategory}`).then((res) => {
            setGetCategory(res.data);
        });
    };

    const editProduct = () => {
        axios.get(`http://localhost:8000/seller/getCategoryByName/${category}`)
            .then((res) => {
                const id1 = res.data[0].idcategory;
                axios.put(`http://localhost:8000/seller/updateProduct/${product.idproduct}`,
                    {
                        namep: name,
                        descriptionp: description,
                        sizep: size,
                        quantityp: quantity,
                        pricep: price,
                        promop: promotion,
                        category_idcategory: id1
                    })
                    .then(() => {
                        console.log('done');
                    })
                    .catch((err) => { console.log("err", err); });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteImage = (idImage: number) => {
        axios.delete(`http://localhost:8000/seller/deleteImage/${product.idproduct}/${idImage}`)
            .then(() => { console.log('done delete'); })
            .catch((err) => { console.log(err); });
    };

    const handleEditClick = () => {
        setShowForm(!showForm);
    };

    const updateImage = (idImage: number) => {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', newImageUrl);
        formData.append(`upload_preset`, 'z7bg588b');
        axios.post('https://api.cloudinary.com/v1_1/dhvwa9hnm/image/upload', formData)
            .then((res) => {
                axios.put(`http://localhost:8000/seller/UpdateImage/${product.idproduct}/${idImage}`, {
                    imageurl: res.data.secure_url
                })
                .then(() => {
                    setIsUploading(false);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    setIsUploading(false);
                });
            })
            .catch((err) => {
                console.log(err);
                setIsUploading(false);
            });
        setShowForm(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="SignUp w-full bg-white">
            {isUploading && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
            <NavSeller />
            <div className="Line3 w-full h-0 left-0 justify-center items-center inline-flex" style={{ marginTop: "5%" }}>
                <div className="Line3 w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
            </div>
            <div className="Frame760 justify-around items-center flex " style={{ marginLeft: "5%" }}>
                {/* Form Fields */}
                <div className="Frame759 flex-col justify-start items-start gap-12 flex w-1/3">
                    <div className="Frame753 flex-col justify-start items-start gap-6 flex">
                        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Update Product</div>
                        <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter your new data below</div>
                    </div>
                    <div className="Frame758 flex-col justify-start items-center gap-10 flex">
                        <div className="Frame757 flex-col justify-start items-start gap-10 flex">
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <input
                                        type="text"
                                        className="login__input"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <input
                                        type="text"
                                        className="login__input"
                                        placeholder="Color"
                                        value={color}
                                        onChange={(e) => { setColor(e.target.value) }}
                                    />
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <input
                                        type="text"
                                        className="login__input"
                                        placeholder="Size"
                                        value={size}
                                        onChange={(e) => { setSize(e.target.value) }}
                                    />
                                    <input
                                        type="number"
                                        className="login__input"
                                        placeholder="Quantity"
                                        value={quantity}
                                        onChange={(e) => { setQuantity(e.target.value) }}
                                    />
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <input
                                        type="number"
                                        className="login__input"
                                        placeholder="Price"
                                        value={price}
                                        onChange={(e) => { setPrice(e.target.value) }}
                                    />
                                    <input
                                        type="number"
                                        className="login__input"
                                        placeholder="Promo"
                                        value={promotion}
                                        onChange={(e) => { setPromotion(e.target.value) }}
                                    />
                                </div>

                            </div>
                            <textarea
                                className="login__input"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="login__input select__input"
                                    style={{
                                        width: '100%',
                                        padding: '0.5rem 1rem',
                                        border: '1px solid #ccc',
                                        borderRadius: '0.25rem',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease-in-out'
                                    }}
                                >
                                    <option value="">Category</option>
                                    {AllCategory.map(oneCategory => (
                                        <option key={oneCategory.id} value={oneCategory.name}>{oneCategory.name}</option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="Frame752 flex-col justify-start items-start gap-4 flex">
                            <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={() => { editProduct() }} >
                                <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                                    Submit
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Image Slider */}
                <div className="w-2/4 p-4 relative">
                    <div>
                        <Slider {...settings}>
                            {imagesUrl.map((imageUrl, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={imageUrl}
                                        alt={`Slide ${index}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '5px',
                                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                    <div className="icon-container " style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)', /* Add a background color to make the icons more visible */
                                        padding: '5px', /* Add padding to the icon container */
                                        borderRadius: '5px', /* Add border radius for rounded corners */
                                    }} >

                                        <button style={{ marginRight: '100px', cursor: 'pointer' }} onClick={() => { deleteImage(imagesId[index]); window.location.reload(); }} />
                                        <button style={{ marginRight: '100px', cursor: 'pointer' }} onClick={() => { { handleEditClick() } }} />
                                        <BsPlus size={30} color="#333" cursor='pointer' />
                                    </div>

                                    {showForm && (
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            updateImage(imagesId[index]);
                                        }} style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)', /* Lighter background color */
                                            padding: '20px', /* Increased padding */
                                            borderRadius: '10px', /* Rounded corners */
                                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' /* Box shadow for depth */
                                        }}>
                                            <label htmlFor={`fileInput-${index}`} className="file-input-label">
                                                <div style={{
                                                    backgroundColor: '#000',
                                                    color: '#fff',
                                                    padding: '10px 20px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer'
                                                }}>Choose File</div>
                                                <input
                                                    type="file"
                                                    id={`fileInput-${index}`}
                                                    onChange={(e) => setNewImageUrl(e.target.files![0])}
                                                    style={{ display: 'none' }} /* Hide the default file input */
                                                />
                                            </label>
                                            <button type="submit" className="upload-button" >Upload</button>
                                        </form>
                                    )}
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
