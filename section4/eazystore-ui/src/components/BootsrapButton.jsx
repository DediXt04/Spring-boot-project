import React from "react";

// Desestruture o objeto de props aqui
export const BootsrapButton = ({ text, type }) => {
  return (
    <div>
      <button className={`btn btn-${type}`}>{text}</button>
    </div>
  );
};