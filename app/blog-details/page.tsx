"use client";
import React from 'react'
import NewsLetter from "../src/components/NewLetter";
import Hero from "@/app/src/components/BlogDetail/Hero";
import Content from "@/app/src/components/BlogDetail/Content";
import Readyto from "@/app/src/components/BlogDetail/ReadyTo";

const page = () => {
  return (
    <>
    <Hero />
    <Content />
    <Readyto />
       <div className=" md:px-56 md:py-12">
          <NewsLetter />
        </div>
    </>
  )
}

export default page
