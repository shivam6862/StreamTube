"use client";
import Link from "next/link";
import VideoCard from "../components/VideoCard";
import classes from "../styles/app.module.css";
import pageData from "../../public/pageData.json";
import singlevideo from "../../public/singlevideo.json";

export default function Home() {
  const topNav = pageData.data;
  const video = pageData.video;

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {topNav.map((item, index) => (
          <div key={index} className={classes.topitem}>
            {item}
          </div>
        ))}
      </div>
      <div className={classes.bottom}>
        {video.map((item, index) => (
          <Link href={singlevideo.videoLink} key={index}>
            <VideoCard
              title={singlevideo.title}
              channel={singlevideo.channel}
              views={singlevideo.views}
              timestamp={singlevideo.timestamp}
              channelImage={singlevideo.channelImage}
              timeDuration={singlevideo.timeDuration}
              thumbnail={singlevideo.thumbnail}
              key={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
