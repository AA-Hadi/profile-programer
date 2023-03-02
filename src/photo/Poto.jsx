import React from "react";
import "./photo.css";
import img from "./p.jpg";
function Poto() {
  return (
    <div>
      <div class="photo-container">
        <img src={img} alt="Random photo" />
        <div className="name">Ahmed abbas</div>
      </div>
    </div>
  );
}

export default Poto;
