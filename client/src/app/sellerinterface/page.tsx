"use client"
import React from "react";
import Nav from '../Navseller/page';
import ProductList from "../Productlist/page";
import Footer from '../Footer/page';

const Dashboard: React.FC = () => {
    return (
        <>
            <Nav />
            <ProductList />
            <Footer />
        </>
    );
}

export default Dashboard;
