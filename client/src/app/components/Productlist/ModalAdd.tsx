import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

interface Props {
  open: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalAdd: FC<Props> = ({ open, closeModal }) => {
  const [images, setImages] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = handleSubmit(async (e) => {
    console.log(e);
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      setImages(selectedImages);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="w-[700px] h-[800px] text-black flex flex-col gap-16">
        <div className="w-full flex justify-between">
          <h1 className="font-bold">Add Product</h1>
          <IoCloseOutline size={20} onClick={closeModal} />
        </div>
        <div className="flex flex-col w-full">
          <form onSubmit={onSubmit}>
            {" "}
            <div className="w-full flex gap-4">
              <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("name", { required: true })}
                />
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  id="color"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("color", { required: true })}
                />
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("category", { required: true })}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="w-full h-32 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("description", { required: true })}
                />
                <label htmlFor="image">Image</label>
                <input
                  id="fileInput"
                  type="file"
                  name="image"
                  accept=".png, .jpeg, .jpg"
                  multiple
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  id="size"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("size", { required: true })}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("quantity", { required: true })}
                />
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("price", { required: true })}
                />
                <label htmlFor="pricepromo">Price Promo</label>
                <input
                  type="text"
                  id="pricepromo"
                  className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                  {...register("pricepromo", { required: true })}
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="w-32 h-12 bg-green-500 text-white rounded-md">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAdd;
