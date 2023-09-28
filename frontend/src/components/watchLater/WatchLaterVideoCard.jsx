import React from "react";
import classes from "../../styles/watchLater/WatchLaterVideoCard.module.css";
import { FaGripLines } from "react-icons/fa6";

const WatchLaterVideoCard = ({
  title,
  channel,
  views,
  timestamp,
  timeDuration,
  thumbnail,
}) => {
  const minutes = Math.trunc(Number(timeDuration) / 60);
  let seconds = Number(timeDuration) % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className={classes.videocard}>
      <div className={classes.firstpart}>
        <FaGripLines />
      </div>
      <div className={classes.videocard_imgBox}>
        <img src={thumbnail} alt="image" />
        <p>{`${minutes}:${seconds}`}</p>
      </div>
      <div className={classes.videocard_info}>
        <div className={classes.videocard_text}>
          <h5>{title}</h5>
          <div className={classes.viewsAndTime}>
            <p>{channel}</p>
            <p>{views} views </p>
            <p> • {timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterVideoCard;
