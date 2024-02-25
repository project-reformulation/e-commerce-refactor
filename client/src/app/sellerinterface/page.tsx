"use client";
import React from "react";
import ProductList from "../components/Productlist/Productlist";

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen">
      <ProductList />
    </div>
  );
};

export default Dashboard;
