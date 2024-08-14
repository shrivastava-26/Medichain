import React, { useState } from "react";
import NavBar from "./NavBar";

// Assuming you have images in a folder named `images` inside the `src` directory.
import lp_11 from "./lp_11.png";
import lp_10 from "./lp_10.png";
import lp_12 from "./lp_12.png";
import slider from "../images/slider_2.png";


function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  function onEnter() {
    setIsHovered(true);
  }
  function onLeave() {
    setIsHovered(false);
  }

  return (
    <div>
        <NavBar></NavBar>
      <div className="bg-gradient-to-b from-black to-green-700 text-black font-sans max-h-screen flex items-center justify-center">
        <div
          className="w-[1400px] h-[450px] flex"

        >
          {/* Image */}
        <div className="flex-grow relative overflow-hidden transition-transform  transform hover:scale-105">
          <img
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
          !isHovered ? "opacity-100" : "opacity-0"
          }`}
          src="https://th.bing.com/th/id/R.d11a7eefb74c936150385d650d99c814?rik=tkxDc18iARosnA&riu=http%3a%2f%2fwww.pleaseconserve.com%2fwp-content%2fuploads%2fIsyourhospitalgreen.jpg&ehk=VqnXf1wEHGjJZjN0zlP990fWMmL60RguZ5U6%2bXFupLQ%3d&risl=&pid=ImgRaw&r=0" 
          alt="Landing page illustration"
          />
        </div>


        </div>
      </div>
    </div>
  );
}

export default LandingPage;