"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbBrandYoutube } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa6";
import { BiSolidVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import classes from "../../styles/layout/Header.module.css";

const Header = ({}) => {
  const size = 24;

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <RxHamburgerMenu size={size} />
        <div className={classes.leftDiv}>
          <TbBrandYoutube size={size} />
          <h2>StreamTube</h2>
        </div>
      </div>
      <div className={classes.middle}>
        <div className={classes.input}>
          <input type="text" />
          <div className={classes.searchbutton}>
            <GoSearch size={size} />
          </div>
        </div>
        <div className={classes.microphone}>
          <FaMicrophone size={size} />
        </div>
      </div>
      <div className={classes.right}>
        <BiSolidVideoPlus size={size} />
        <BsBell size={size} />
        <BiSolidUserCircle size={size} />
      </div>
    </div>
  );
};

export default Header;
