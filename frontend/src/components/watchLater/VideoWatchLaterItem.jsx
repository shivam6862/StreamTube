"use client";
import classes from "../../styles/watchLater/VideoWatchLaterItem.module.css";
import { video } from "../../../public/pageData.json";
import singlevideo from "../../../public/singlevideo.json";
import WatchLaterVideoCard from "./WatchLaterVideoCard";
import Link from "next/link";

const VideoWatchLaterItem = () => {
  return (
    <div className={classes.container}>
      <Link href={`${singlevideo.videoLink}`}>
        {video.map((item, index) => (
          <WatchLaterVideoCard
            title={singlevideo.title}
            channel={singlevideo.channel}
            views={singlevideo.views}
            timestamp={singlevideo.timestamp}
            timeDuration={singlevideo.timeDuration}
            thumbnail={singlevideo.thumbnail}
            key={index}
          />
        ))}
      </Link>
    </div>
  );
};

export default VideoWatchLaterItem;
