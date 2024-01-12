"use client";
import React from "react";
import BlogHeroSection from "../src/components/Blog/HeroSection";
import BlogVideoSection from "../src/components/Blog/videoSection";
import Swiper from "../src/components/Swiper";
import PageContent from "../src/components/Blog/Content";
import BlogForm from "../src/components/Blog/BlogForm";

const page = () => {
  return (
    <>
      <BlogHeroSection />
      <BlogVideoSection />
      <Swiper />
      <PageContent />
      <BlogForm />
    </>
  );
};

export default page;
