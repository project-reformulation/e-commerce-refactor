"use client"
import Nav from "../HomeComponents/Nav/page"
import Hero from "../HomeComponents/hero/page"
import Footer from "../HomeComponents/Footer/page"
import Categories from "../HomeComponents/Categories/page"
import Product from "../HomeComponents/Product/page"
import Sales from "../HomeComponents/Sales/page"
import Best_Slling from "../HomeComponents/Best_selling/page"
import Explore from "../HomeComponents/Explore/page"

function Home() {

  return (
    <>
      <Nav />
      <Hero />
      <Sales />
      <Categories />
      <Best_Slling />
      <Product />
      <Explore />
      
      <Footer />
    </>
  )
}


export default Home