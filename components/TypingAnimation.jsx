import React, { memo } from "react";
import Typical from "react-typical";
const TypingAnimation = () => {
  return (
    <>
      <Typical
        loop={5}
        wrapper="p"
        steps={[
          "Hello there 👋",
          2000,
          "These are some pictures from our Instagram page",
          2000,
          "@Captur the Moment",
          2000,
        ]}
      />
    </>
  );
};

export default memo(TypingAnimation);
