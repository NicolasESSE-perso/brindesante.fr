import React, { useState, useEffect } from "react";
import ImageDefaut from "./IllustrationSymptome.png";

function Illustrations({ monUrl, alt }) {
  const [sourceImage, setSourceImage] = useState("");

  useEffect(() => {
    if (monUrl) {
      const urlComplete = process.env.REACT_APP_URL_API_BRINDESANTE + monUrl;
      setSourceImage(urlComplete);
    } else {
      setSourceImage(ImageDefaut);
    }
  }, [monUrl]);

  const Style = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };

  return (
    <div>
      <img src={sourceImage} alt="" style={Style} />
    </div>
  );
}

export default Illustrations;
