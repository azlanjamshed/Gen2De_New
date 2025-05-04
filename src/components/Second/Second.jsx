import "./second.css";
import React from "react";

const Second = () => {
  return (
    <div className="s">
      <div className="mani">ABOUT </div>
      <div className="text-way">
        <p className="about">
          At Gen2De ( General Developer and Designer ) , we believe that every
          business — no matter how small — deserves a strong online presence.
          Our mission is simple: to turn your ideas into beautifully crafted,
          functional websites that help your business grow.
        </p>
        <p className="about-2">
          We specialize in clean design, responsive development, and fast
          delivery, focusing on what truly matters — your success. Whether
          you're launching a new venture or scaling an existing one, we provide
          tailor-made digital solutions to match your goals and budget.
        </p>
      </div>
      <div className="oval">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        ></lottie-player>
      </div>
    </div>
  );
};

export default Second;
