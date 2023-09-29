"use client";
import classes from "../../styles/histroy/history.module.css";
import histroyData from "../../../public/histroyData.json";
import singlevideo from "../../../public/singlevideo.json";
import Link from "next/link";
import ShortCard from "../../components/histroy/ShortCard";
import HistroyVideoCard from "../../components/histroy/HistroyVideoCard";
import {
  FaTrash,
  FaPause,
  FaHistory,
  FaComments,
  FaCommentsDollar,
} from "react-icons/fa";
import { TbBuildingCommunity } from "react-icons/tb";
const navigationData = [
  {
    text: "Clear all watch history",
    icon: <FaTrash />,
    href: "clearallwatchhistory",
  },
  { text: "Pause watch history", icon: <FaPause />, href: "pausewatchhistory" },
  { text: "Manage all history", icon: <FaHistory />, href: "manageallhistory" },
  { text: "Comments", icon: <FaComments />, href: "comments" },
  {
    text: "Community posts",
    icon: <TbBuildingCommunity />,
    href: "communityposts",
  },
  { text: "Live chat", icon: <FaCommentsDollar />, href: "livechat" },
];

const library = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.container}>
        <div className={classes.box}>
          <h1>Watch histroy</h1>
          <div className={classes.histroy}>
            {Object.keys(histroyData).map((day) => (
              <div key={day} className={classes.eachDayHistroy}>
                <h2>{day}</h2>
                <div className={classes.shortDiv}>
                  {histroyData[day].shorts.length > 0 && <h3>Shorts</h3>}
                  <div className={classes.eachDayHistroyItemsShort}>
                    {histroyData[day].shorts.map((short, index) => (
                      <Link href={singlevideo.videoLink} key={`short-${index}`}>
                        <ShortCard
                          title={singlevideo.title}
                          views={singlevideo.views}
                          thumbnail={singlevideo.thumbnail}
                          shortLink={singlevideo.shortLink}
                          key={index}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={classes.videoDiv}>
                  {histroyData[day].videos.length > 0 && <h3>Videos</h3>}
                  <div className={classes.eachDayHistroyItems}>
                    {histroyData[day].videos.map((video, index) => (
                      <Link href={singlevideo.videoLink} key={`video-${index}`}>
                        <HistroyVideoCard
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
              </div>
            ))}
          </div>
        </div>
        <div className={classes.navigation}>
          {navigationData.map((item, index) => (
            <Link key={index} href={`/${item.href}`}>
              {item.icon}
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default library;
