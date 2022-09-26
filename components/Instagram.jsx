import React from "react";
import image1 from "../public/ig-img-1.jpeg";
import image2 from "../public/ig-img-2.jpeg";
import image3 from "../public/ig-img-3.jpeg";
import image4 from "../public/ig-img-4.jpeg";
import image5 from "../public/ig-img-5.jpeg";
import InstagramImg from "./InstagramImg";
const Instagram = () => {
  return (
    <section className="max-w-[1240px]  mx-auto text-center py-24 ">
      <p>Follow us on Instagram</p>
      <p>@Captur the Moment</p>

      <div className="grid grid-cols-1 md:grid-cols-customGrid   lg:grid-cols-5 gap-2 p-4">
        <InstagramImg socialImg={image1} colSize={"col-span-1"} />
        <InstagramImg socialImg={image2} colSize={"col-span-1"} />
        <InstagramImg socialImg={image3} colSize={"col-span-1"} />

        <InstagramImg
          socialImg={image4}
          colSize={"md:col-start-1 md:col-end-2 "}
        />
        <InstagramImg
          socialImg={image5}
          colSize={"md:col-start-2 md:col-end-4"}
        />
      </div>
    </section>
  );
};

export default Instagram;
