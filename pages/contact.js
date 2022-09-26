import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";

const contact = () => {
  return (
    <>
      <Hero
        message={"Submit your message for cooperation and further queries "}
        heading={"Contact"}
      />
      <Form />
    </>
  );
};

export default contact;
