import React from "react";
import Watch from "./Watch";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(info);
  return (
    <div>
      <div className="px-2 cursor-pointer  mx-2 my-2 w-60 shadow-xl  ">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-medium truncate">{title}</li>
          <li className=" truncate">{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};
export const AdVideoCard=({info})=>{
  return(
    <div className="border border-black  rounded-lg">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
