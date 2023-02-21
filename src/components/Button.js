import React from "react";

const Button = ({ name }) => {
  return (
    <div className="border border-gray-400 rounded-full px-2">
      <button>{name}</button>
    </div>
  );
};

export default Button;
