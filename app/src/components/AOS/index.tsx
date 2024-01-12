"use client"
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return null;
};

export default Index;
