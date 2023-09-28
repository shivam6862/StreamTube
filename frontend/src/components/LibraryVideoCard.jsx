import React from "react";
import classes from "../styles/LibraryVideoCard.module.css";
import { VscVerifiedFilled } from "react-icons/vsc";

const LibraryVideoCard = ({
  title,
  channel,
  views,
  timestamp,
  timeDuration,
  thumbnail,
  icons,
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
        <div className={classes.imageTime}>
          {icons.length >= 2 && (
            <div className={classes.icons}>
              <div className={classes.icon}>{icons[0]}</div>
              <div className={classes.icon}>{icons[1]}</div>
            </div>
          )}
          {icons.length == 1 && (
            <div className={classes.icons}>
              <div className={classes.iconcover}>{icons[0]}</div>
            </div>
          )}
          {icons.length == 1 && <div className={classes.iconcoverborder}></div>}
          <p>{`${minutes}:${seconds}`}</p>
        </div>
      </div>
      <div className={classes.videocard_info}>
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

export default LibraryVideoCard;
