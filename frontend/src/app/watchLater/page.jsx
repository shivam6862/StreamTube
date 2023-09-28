"use client";
import classes from "../../styles/watchLater/WatchLater.module.css";
import UserProfile from "../../components/watchLater/UserProfile";
import VideoWatchLaterItem from "../../components/watchLater/VideoWatchLaterItem";
import singleviedoData from "../../../public/singlevideo.json";

const watchLater = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.left}>
          <UserProfile
            thumbnail={singleviedoData.thumbnail}
            name={singleviedoData.name}
            videoscount={singleviedoData.videoscount}
            date={singleviedoData.date}
            viewsuser={singleviedoData.viewsuser}
          />
        </div>
        <div className={classes.right}>
          <div className={classes.top}>
            <div className={classes.topitem}>All</div>
            <div className={classes.topitem}>Videos</div>
            <div className={classes.topitem}>Shorts</div>
          </div>
          <div className={classes.bottom}>
            <VideoWatchLaterItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default watchLater;
