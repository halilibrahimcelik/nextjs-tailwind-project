import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <main className="relative">
      <Image
        className="h-full w-full"
        layout="responsive"
        src={socialImg}
        alt="/"
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </main>
  );
};

export default InstagramImg;
