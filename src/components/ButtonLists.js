import React from "react";
import Button from "./Button";

const ButtonLists = () => {
  const list = [
    "All",
    "Songs",
    "Music",
    "Comedy",
    "Dance",
    "Action",
    "Drama",
    "News",
  ];

  return (
    <div className="flex mt-1 justify-evenly shadow-lg bg-gray-200">
      
      {list.map((item,index) => {
        return <Button name={item} key={index}/> ;
      })}
       
    </div>
  );
};

export default ButtonLists;
