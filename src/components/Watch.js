import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const Vid_URL="https://www.youtube.com/embed/"+searchParams.get("v");
  console.log(Vid_URL)
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
      className="pl-7"
        width="950"
        height="450"
        src={Vid_URL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Watch;
