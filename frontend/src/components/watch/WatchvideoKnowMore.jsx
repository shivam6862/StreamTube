"use client";
import classes from "../../styles/watch/WatchvideoKnowMore.module.css";

const WatchvideoKnowMore = ({ singlevideo }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.views}>{singlevideo.views}</div>
        <div className={classes.date}>{singlevideo.date}</div>
        <div className={classes.tags}>{singlevideo.tags}</div>
      </div>
      <div className={classes.title}>
        {singlevideo.title}
        <span> read more</span>
      </div>
    </div>
  );
};

export default WatchvideoKnowMore;
