"use client"
import Nav from "../Nav/page"
import Hero from "../hero/page"
// import New from ""
// import Over from "./over/Over"
import Footer from "../Footer/page"
import Categories from "../Categories/page"
import Product from "../Product/page"
import Sales from "../Sales/page"
import Best_Slling from "../Best_selling/page"
import Explore from "../Explore/page"
import ProductCountdown from "../Productcountdown/page"

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