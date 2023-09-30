"use client";
import classes from "../../styles/watchLater/VideoWatchLaterItem.module.css";
import { video } from "../../../public/pageData.json";
import singlevideo from "../../../public/singlevideo.json";
import WatchLaterVideoCard from "./WatchLaterVideoCard";
import Link from "next/link";

const VideoWatchLaterItem = () => {
  return (
    <div className={classes.container}>
      {video.map((item, index) => (
        <Link href={`${singlevideo.videoLink}`} key={index}>
          <WatchLaterVideoCard
            title={singlevideo.title}
            channel={singlevideo.channel}
            views={singlevideo.views}
            timestamp={singlevideo.timestamp}
            timeDuration={singlevideo.timeDuration}
            thumbnail={singlevideo.thumbnail}
            key={index}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoWatchLaterItem;
