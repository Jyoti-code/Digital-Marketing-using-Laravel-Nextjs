import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import Team from "./Team";
import About from "../home/About";
import Footer from "../footer/Footer";

export default function AboutMain() {
  return (
    <div className="bg-white">
      <Navbar />
      <Header />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
