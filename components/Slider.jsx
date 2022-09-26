import React, { useState } from "react";
import { imageData } from "../utils/sliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="max-w-[1140px] mx-auto  " id="gallery">
      <h1 className="  text-2xl font-bold text-center w-full md:text-left p-4">
        Gallery
      </h1>
      <main>
        {imageData.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] shadow-customShadow    rounded-3xl ease-out duration-300  relative flex justify-center"
                  : "opacity-0  rounded-3xl relative flex justify-center"
              }
            >
              <FaArrowCircleLeft
                onClick={previousSlide}
                size={40}
                className={
                  "absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] ease-linear duration-200 hover:translate-x-[-10px] "
                }
              />
              {index === current && (
                <Image
                  src={image.image}
                  width="1400"
                  height="600"
                  objectFit="cover"
                  alt="images"
                  className="rounded-3xl "
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={40}
                className={
                  "absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]  ease-linear duration-200 hover:translate-x-[10px] "
                }
              />
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Slider;
