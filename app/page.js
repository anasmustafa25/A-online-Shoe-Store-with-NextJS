"use client";
import Header from "@/components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import dynamic from "next/dynamic";
import { products } from "./data";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export default function Home() {
  
  return (
    <div>
      <Header/>
      <div className="video-container">
        <ReactPlayer
          autoPlay
          loop
          muted
          playing
          url="video.mp4"
          width="100%"
          height="100%"
        />
        <div className="video-overlay"></div>
        <div className="video-text">
          <h1>Welcome to Our Shoe Store</h1>
          <p>Discover comfort, style, and performance.</p>
        </div>
      </div>
      <main className="main-content">
        <section className="products-section">
          <h2 className="section-title" id="home">
            Our Top Selling
          </h2>
          <div className="products-grid">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
