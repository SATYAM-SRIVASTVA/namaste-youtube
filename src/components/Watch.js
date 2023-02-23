import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  
  // console.log(searchParams.get("v"));
  const Vid_URL = "https://www.youtube.com/embed/" + searchParams.get("v");
  console.log(Vid_URL);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        className="pl-7"
        width="1250"
        height="500"
        src={Vid_URL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-row gap-3 justify-between">
        <div className="ml-0 flex flex-row">
          <img
            className="w-[150px] mx-5 p-2 rounded-full hover:scale-110 transition-all cursor-pointer"
            src="https://ihitthebutton.com/wp-content/uploads/2020/11/youtube-subscribe-png.png"
            alt="subscribe"
          />
          <buntton className="rounded-3xl h-10 cursor-pointer hover:scale-110 transition-all p-2 px-4 mt-2 bg-black text-white">
            Join
          </buntton>
        </div>
        <div className="flex flex-row gap-10 mr-7">
          <BiLike
            className="mt-3 cursor-pointer hover:scale-110 transition-all"
            size={30}
          />
          <BiDislike
            className="mt-3 cursor-pointer hover:scale-110 transition-all"
            size={30}
          />
          <RiShareForwardLine
            className="mt-3 cursor-pointer hover:scale-110 transition-all"
            size={30}
          />
          <BsDownload
            className="mt-3 cursor-pointer hover:scale-110 transition-all"
            size={30}
          />
          <AiOutlineDollar
            className="mt-3 cursor-pointer hover:scale-110 transition-all"
            size={30}
          />
        </div>
      </div>
      <CommentsContainer/>
    </div>
  );
};
export default Watch;
