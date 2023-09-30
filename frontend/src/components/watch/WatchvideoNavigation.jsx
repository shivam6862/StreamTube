"use client";
import classes from "../../styles/watch/WatchvideoNavigation.module.css";
import Link from "next/link";
import { video } from "../../../public/pageData.json";
import singlevideo from "../../../public/singlevideo.json";
import WatchvideoNavigationItem from "./WatchvideoNavigationItem";

const WatchvideoNavigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {video.map((item, index) => (
          <Link href={`${singlevideo.videoLink}`} key={index}>
            <WatchvideoNavigationItem
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
    </div>
  );
};

export default WatchvideoNavigation;
