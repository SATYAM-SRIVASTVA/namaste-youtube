import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_API } from "../utils/Constant";
import { RiVideoAddLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";
import {MdOutlineMic} from 'react-icons/md'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  /**
   *
   *   {
   *     "iphone":["iphone 11","iphone 14"]
   *   }
   *
   */

  // console.log(searchQuery);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference bw 2 api calls is <200ms
    // decline the api call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   *  key-i
   *   -render the component
   *   -useEffect()
   *   -start timer=>make api call after 200ms
   *
   *  key-ip
   *   -destroy the component (useEffect return method)
   *   - re-render the component
   *   - useEffect()
   *   - start timer => make an API call after 200ms
   *
   *  setTimeOut(200)- Make an api call
   *
   */

  const getSearchSuggestions = async () => {
    console.log("api call"+searchQuery)
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  };

  const dispatch = useDispatch();
  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed bg-white w-[100rem] grid grid-flow-col p-5 px-5  mx-2 shadow-lg ">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          className="cursor-pointer"
          size={30}
          onClick={() => togglemenuHandler()}
        />
        <img
          className="h-8 ml-4 cursor-pointer "
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
          alt="youtube-logo"
        />
      </div>
      <div>
        <div className="flex col-span-9 ">
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            className="w-[30rem] h-8 border rounded-l-full outline-none px-5 border-gray-500 ml-20"
          />
          <button className="border border-gray-500 rounded-r-full px-5">
            <CiSearch className="cursor-pointer" size={20} />
          </button>
          <MdOutlineMic className="cursor-pointer ml-3" size={30}/>
        </div>
        {showSuggestions && (
          <div className="w-[43vw]">
            {suggestions.map((suggestion) => (
              <li
                className="sticky ml-20 pl-5 gap-2 bg-white flex flex-row list-none shadow-xl hover:bg-gray-300"
                key={suggestion}
              >
                <CiSearch className="mt-1" size={20} />
                {suggestion}
              </li>
            ))}
          </div>
        )}
      </div>

      <div className="flex pr-10 col-span-2 space-x-1 gap-3">
        <RiVideoAddLine className="cursor-pointer" size={30} />
        <IoMdNotificationsOutline className="cursor-pointer" size={30} />
        <HiOutlineUserCircle className="cursor-pointer" size={30} />
      </div>
    </div>
  );
};

export default Head;
