"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
  id: number;
  name: string
}

interface ImageUrl {
  imageurl: string;
}

const AddProduct = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [promotion, setPromotion] = useState<number>(0);
  const [color, setColor] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [idCategory, setIdCategory] = useState<number>(0);
  const [AllCategory, setAllCategory] = useState<Category[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [listUrlImages, setListUrlImages] = useState<ImageUrl[]>([]);
  const [verifyChecked, setVerifyChecked] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      setImages(selectedImages);
    }
  };

  const handleImageUpload = async () => {
    setIsUploading(true);
    try {
      const formData = new FormData();

      const list: ImageUrl[] = [];
      for (const image of images) {
        formData.append('file', image);
        formData.append('upload_preset', 'jm66fokf');
        const res = await axios.post('https://api.cloudinary.com/v1_1/dcoxnxv3r/image/upload', formData);
        console.log('8888', res.data.secure_url);
        list.push({ imageurl: res.data.secure_url });
      }
      setListUrlImages(list);
    } catch (error) {
      console.error('hi', error);
    } finally {
      setIsUploading(false);
    }
  };

  console.log('test', listUrlImages);

  useEffect(() => {
    axios.get('http://localhost:8000/admin/getAllCategory')
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => {
        console.log('err when i want to fetch category data', err);
      });
  }, []);
  const add = () => {
    axios.get(`http://localhost:8000/seller/getCategoryByName/${category}`)
      .then((res) => {
        const id1 = res.data[0].idcategory;
        axios.post('http://localhost:8000/seller/AddProductWithImages', {
          listURL: listUrlImages,
          namep: name,
          descriptionp: description,
          sizep: size,
          quantityp: quantity,
          pricep: price,
          promop: promotion,
          category_idcategory: id1
        }).then(() => {
        })
        .catch((err) => { console.log('err', err); });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="SignUp w-full bg-white">
        <div className="Line3 w-full h-0 left-0 justify-center items-center inline-flex" style={{ marginTop: "4%" }}>
            <div className="Line3 w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
        </div>
        <div className="Frame760 justify-around items-center flex">
            <div className="Frame759 flex-col justify-start items-start gap-12 flex">
                <div className="Frame753 flex-col justify-start items-start gap-6 flex">
                    <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Add Product</div>
                    <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter details below</div>
                </div>
                <div className="Frame758 flex-col justify-start items-center gap-10 flex">
                    <div className="Frame757 flex-col justify-start items-start gap-10 flex">
                        <div className="flex justify-between items-center gap-2">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="Name"
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
                                    onChange={(e) => { setSize(e.target.value) }}
                                />
                                <input
                                    type="number"
                                    className="login__input"
                                    placeholder="Quantity"
                                    onChange={(e) => { setQuantity(Number(e.target.value)) }}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <input
                                    type="number"
                                    className="login__input"
                                    placeholder="Price"
                                    onChange={(e) => { setPrice(Number(e.target.value)) }}
                                />
                                <input
                                    type="number"
                                    className="login__input"
                                    placeholder="Promo"
                                    onChange={(e) => { setPromotion(Number(e.target.value)) }}
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
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <label htmlFor="fileInput" className="cursor-pointer bg-black text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 hover:bg-gray-700">
                                    Choose Images
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    multiple
                                    className="hidden"
                                    onChange={(e) => { handleImageChange(e) }}
                                />
                            </div>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                </div>
                            ))}
                            {isUploading && (
                                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        setVerifyChecked(e.target.checked);
                                        if (e.target.checked) {
                                            handleImageUpload();
                                        }
                                    }}
                                    id="verificationCheckbox"
                                    className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded-md focus:ring-blue-500"
                                />
                                <label htmlFor="verificationCheckbox" className="block text-sm text-gray-900">
                                    Verify
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="Frame752 flex-col justify-start items-start gap-4 flex">
                        <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={() => { add(), window.location.reload() }} >
                            <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                                Create Product
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
;
export default AddProduct
