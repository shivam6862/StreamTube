import React from "react";
import classes from "../styles/VideoCard.module.css";
import { VscVerifiedFilled } from "react-icons/vsc";

const VideoCard = ({
  title,
  channel,
  views,
  timestamp,
  channelImage,
  timeDuration,
  thumbnail,
}) => {
  const minutes = Math.trunc(Number(timeDuration) / 60);
  let seconds = Number(timeDuration) % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className={classes.videocard}>
      <div className={classes.videocard_imgBox}>
        <img
          className={classes.videocard_thumbnail}
          src={thumbnail}
          alt="image"
        />
        <p className={classes.imageTime}>{`${minutes}:${seconds}`}</p>
      </div>
      <div className={classes.videocard_info}>
        <div className={classes.videocard_avatar}>
          <img src={channelImage} alt={channel} />
        </div>
        <div className={classes.videocard_text}>
          <h5>{title}</h5>
          <div className={classes.channelName}>
            <p>{channel}</p>
            <VscVerifiedFilled />
          </div>
          <div className={classes.viewsAndTime}>
            <p>{views} views </p>
            <p> • {timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
