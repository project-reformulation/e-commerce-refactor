export type Product = {
  idproduct: string;
  namep: string;
  color: string;
  sizep: string;
  category: string;
  descriptionp: string;
  quantityp: number;
  pricep: number;
  promop: number;
  imageurl: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role?: string;
};
