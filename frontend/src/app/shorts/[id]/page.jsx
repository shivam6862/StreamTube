"use client";
import { useEffect, useState } from "react";
import classes from "../../../styles/Shorts.module.css";
import singlevideo from "../../../../public/singlevideo.json";
import { usePathname } from "next/navigation";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsFillChatLeftTextFill, BsThreeDots } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { v4 } from "uuid";

const ShortByID = () => {
  const size = 28;
  const video = singlevideo;
  const id = usePathname().substring(8);
  const [shortsId, setShortsId] = useState([id]);
  const [showCurrent, setShowCurrent] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowDown") {
        const newid = v4();
        setShortsId((prevShortsId) => [...prevShortsId, newid]);
        setShowCurrent((prev) => prev + 1);
      } else if (event.key == "ArrowUp") {
        setShowCurrent((prev) => prev - 1);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.left}>
          <iframe src={video.shortLink} title={video.title}></iframe>
          <div className={classes.overleftpart}>
            <p>{shortsId[showCurrent]}</p>
            <p>{video.title}</p>
            <div className={classes.leftbottomdiv}>
              <div className={classes.channelImage}>
                <img src={video.channelImage} alt={video.channel} />
              </div>
              <p>{video.channel}</p>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightbox}>
            <div className={classes.rightbackground}>
              <BiSolidLike size={size} />
            </div>
            {video.like}
          </div>
          <div className={classes.rightbox}>
            <div className={classes.rightbackground}>
              <BiSolidDislike size={size} />
            </div>
            Dislike
          </div>
          <div className={classes.rightbox}>
            <div className={classes.rightbackground}>
              <BsFillChatLeftTextFill size={size} />
            </div>
            {video.comment}
          </div>
          <div className={classes.rightbox}>
            <div className={classes.rightbackground}>
              <IoMdShareAlt size={size} />
            </div>
            Share
          </div>
          <div className={classes.rightbackground}>
            <BsThreeDots size={size} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortByID;
