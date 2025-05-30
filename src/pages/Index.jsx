import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Base from "../components/Base";
import axios from "axios";
import Store from "../components/users/Store";
import { BASE_URL } from "../services/helper.service";
import { useEffect } from "react";
import hussleImage from "../assets/husslefree.png";
import ElevateImage from "../assets/ElevateImage.jpg";
import gratitudeImage from "../assets/gratitude.jpg"
import {
  infoWithImageInRightSection,
  trendingProducts,
  infoWithImageInLeftSection,
  contactForm
} from "./HomePageComponents";

import { useState } from "react";

const dummyData=[
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Learn Code With Durgesh",
      },
      description: "string",
      discountedPrice: 5000,
      live: true,
      price: 6000,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "Product title",
    },
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Learn Code With Durgesh",
      },
      description: "string",
      discountedPrice: 5000,
      live: true,
      price: 6000,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "Product title",
    },
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Learn Code With Durgesh",
      },
      description: "string",
      discountedPrice: 5000,
      live: true,
      price: 6000,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "Product title",
    },
  ]
function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
   const getFun=async()=>{
     let result=await fetch(`${BASE_URL}/products`)
     result=await result.json()
     console.log(result);
     setProducts(result.content || [])
     

   }
getFun()
  }, [])
  

  return (
    <Base
      title="Shop what you need"
      description={
        "Welcome to Trending Store, We provide best items as you need. "
      }
      buttonEnabled={true}
      buttonText="Start Shoping "
      buttonType="primary"
      buttonLink="/store"
    >
      <div className="my-4">{trendingProducts(products)}</div>
      <div style={{ margin: "100px 0" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
       backgroundColor: "#fdfdfd"
       
    }}
  >
    <div style={{ flex: 1 }}>
      <img
        src={ElevateImage}
        alt="Right Info Section"
        style={{
          maxWidth: "100%",
          maxHeight: "300px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: "16px",
        }}
      />
    </div>
    <div style={{ flex: 1, padding: "0 1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        Elevate Your Style
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
        Discover the latest trends in tech and lifestyle gadgets, handpicked to boost your daily life. Shop smarter with exclusive deals and premium quality.
      </p>
    </div>
  </div>
</div>


<div style={{ margin: "100px 0" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      flexDirection: "row-reverse",
      backgroundColor: "#fdfdfd"
    }}
  >
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
        src={hussleImage}
        alt="Left Info Section"
        style={{
          maxWidth: "100%",
          maxHeight: "300px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: "16px",
          
        }}
      />
    </div>
    <div style={{ flex: 1, padding: "0 1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        Hassle-Free Shopping
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
        Enjoy a seamless online shopping experience with secure payment options,
        fast delivery, and customer-first support you can count on.
      </p>
    </div>
  </div>
</div>



      <div className="my-4">{contactForm()}</div>

     <div style={{ margin: "100px 0" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 2rem",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      backgroundColor: "#f9f9f9"
    }}
  >
    <div style={{ flex: 1 }}>
      <img
        src={gratitudeImage}
        alt="Thank you"
        style={{
          maxWidth: "100%",
          maxHeight: "300px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: "16px",
        }}
      />
    </div>
    <div style={{ flex: 1, padding: "0 1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        Thank You for Reaching Out!
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.7" }}>
        We appreciate your interest in our store. Our team will get back to you shortly. Meanwhile, feel free to explore trending deals and new arrivals tailored just for you.
      </p>
      <a
        href="/store"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2196f3",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "600",
          transition: "background-color 0.3s",
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#2196f3")}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = "#2196f3")}
      >
        Continue Shopping
      </a>
    </div>
  </div>
</div>


    </Base>
  );
}
export default Index;
