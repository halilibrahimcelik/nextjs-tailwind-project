import Image from "next/image";
import React from "react";
import Hero from "../components/Hero";
import { workSlides } from "../utils/sliderData";

const work = () => {
  return (
    <>
      <Hero
        message={"this is my some of work travelling around the world"}
        heading={"Work"}
      />
      <div>
        <h2 className="text-3xl my-3 text-center">My recent Pieces</h2>
      </div>

      <div className="border-red-900 p-14 md:p-6 gap-3 w-full grid grid-col-1 md:grid-cols-workGrid md:grid-rows-workRow  lg:grid-cols-6">
        {workSlides.map((slide, index) => {
          return (
            <Image
              className={`md:grid-row${slide.rowSpan} rounded-full shadow-lg cursor-pointer hover:animate-flip`}
              key={index}
              src={slide.images}
              layout="responsive"
              width={200}
              height={200}
              objectFit={"cover"}
              alt="/"
            />
          );
        })}
      </div>
    </>
  );
};

export default work;
