"use client";
import classes from "../../styles/subscriptions.module.css";
import pageData from "../../../public/pageData.json";
import singlevideo from "../../../public/singlevideo.json";
import Link from "next/link";
import VideoCard from "../../components/VideoCard";

const subscriptions = () => {
  const video = pageData.video;

  return (
    <div className={classes.container}>
      <h2>Latest</h2>
      <div className={classes.bottom}>
        {video.map((item, index) => (
          <Link href={singlevideo.videoLink}>
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
};

export default subscriptions;
