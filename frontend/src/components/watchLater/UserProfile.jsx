"use client";
import classes from "../../styles/watchLater/UserProfile.module.css";
import { RiDownloadLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsShuffle, BsPlayFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

const size = 20;
const color = "white";
const icons = [<BsFillPlayFill size={size} color={color} />];

const UserProfile = ({ thumbnail, name, videoscount, date, viewsuser }) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.leftimgBox}>
          <img src={thumbnail} alt="image" />
          <div className={classes.leftimgdiv}>
            <div className={classes.icons}>
              <div className={classes.iconcover}>{icons[0]}</div>
            </div>
          </div>
        </div>
        <div className={classes.aboutusercontainer}>
          <h2>Watch Later</h2>
          <p>{name}</p>
          <div className={classes.aboutuser}>
            <div>{videoscount} videos</div>
            <div>{viewsuser} views</div>
            <div>Last updated on {date}</div>
          </div>
        </div>
        <div className={classes.logo}>
          <div className={classes.logoitem}>
            <RiDownloadLine />
          </div>
          <div className={classes.logoitem}>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <button>
          <BsPlayFill /> play all
        </button>
        <button>
          <BsShuffle /> shuffle
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
