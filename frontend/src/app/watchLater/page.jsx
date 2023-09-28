"use client";
import classes from "../../styles/watchLater/watchLater.module.css";
import UserProfile from "../../components/watchLater/userProfile";
import VideoWatchLaterItem from "../../components/watchLater/VideoWatchLaterItem";

const watchLater = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <UserProfile />
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
  );
};

export default watchLater;
