import React from "react";
import Style from "./Symptomes.module.css";

function Symptomes({ texteHtml }) {
  //NIE pour utiliser dangerouslySetInnerHTML pour le richtext
  const ToHtml = (data) => {
    return { __html: data };
  };

  console.log(texteHtml);
  if (texteHtml !== "<p><br></p>") {
    return (
      <div>
        <div className={Style.Symptomes}>
          <h2 className={Style.Titre}>Symptômes</h2>
          <div
            className={Style.SymptomesData}
            dangerouslySetInnerHTML={ToHtml(texteHtml)}
          ></div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
export default Symptomes;
