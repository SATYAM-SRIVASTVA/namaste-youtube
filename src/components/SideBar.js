import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if(!isMenuOpen) return null;
  // Early return

  return !isMenuOpen ? null : (
    <div className="col-span-1 w-20 mt-20 fixed">
      <div className="pl-7 pt-7">
        <ul>
          <AiFillHome size={25} />
          <Link to="/"><li>Home</li></Link>
        </ul>
      </div>
      <div className="pl-7 pt-9">
        <ul>
          <AiOutlinePlayCircle size={25} />
          <li>Shorts</li>
        </ul>
      </div>
      <div className="pl-7 pt-9">
        <ul>
          <GiNewspaper size={25} />
          <li>News</li>
        </ul>
      </div>
      <div className="pl-7 pt-9">
        <ul>
          <MdOutlineSubscriptions size={25} />
          <li>Subscription</li>
        </ul>
      </div>
      <div className="pl-7 pt-9 ">
        <ul>
          <AiOutlineHistory size={25} />
          <li>History</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
