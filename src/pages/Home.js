// src/pages/Home.jsx - WITH SCROLL REVEAL
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories />
      <WhyChoose />
      <Contact />
      <WhatsappButton />
      <Footer />
      
    </>
  );
}