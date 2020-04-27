import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import Illustration from "./Illustrations";

function EditionIllustration({ imageUrl, onChange }) {
  const [monImage, setMonImage] = useState("");
  const [fichier, setFichier] = useState();
  const fileInput = useRef(null);

  useEffect(() => {
    if (imageUrl) {
      setMonImage(imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (fichier) {
      //NIE Upload de l'image
      const monUrl = `${process.env.REACT_APP_URL_API_BRINDESANTE}/images/`;
      const fd = new FormData();
      fd.append("image_file", fichier, fichier.name);
      Axios.post(monUrl, fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload :" +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      }).then((res) => {
        //NIE On met à jour l'url de l'image
        setMonImage(res.data.url);
        //NIE On retourne l'url de l'image modifiée
        onChange(res.data.url);
      });
    }
    // eslint-disable-next-line
  }, [fichier]);

  //NIE Sélection de l'image
  const imageSelect = (e) => {
    setFichier(e.target.files[0]);
  };

  return (
    <div onClick={() => fileInput.current.click()}>
      <input
        type="file"
        onChange={imageSelect}
        style={{ display: "none" }}
        ref={fileInput}
      />
      <Illustration monUrl={monImage} />
    </div>
  );
}

export default EditionIllustration;
