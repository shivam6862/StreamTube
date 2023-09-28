"use client";
import classes from "../../styles/library.module.css";
import Link from "next/link";
import LibraryVideoCard from "../../components/LibraryVideoCard";
import singlevideo from "../../../public/singlevideo.json";
import { ImHistory } from "react-icons/im";
import { AiOutlineHistory } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillPlayFill } from "react-icons/bs";

const size = 20;
const color = "white";
const libraryData = {
  history: {
    icons: [
      <ImHistory size={size} color={color} />,
      <RiPlayList2Fill size={size} color={color} />,
    ],
    data: ["", "", "", "", "", "", "", ""],
  },
  "watch Later": {
    icons: [
      <AiOutlineHistory size={size} color={color} />,
      <RiPlayList2Fill size={size} color={color} />,
    ],
    data: ["", "", "", "", "", ""],
  },
  playlists: {
    icons: [<BsFillPlayFill size={size} color={color} />],
    data: ["", "", "", "", "", "", ""],
  },
  "liked Video": {
    icons: [
      <BiSolidLike size={size} color={color} />,
      <RiPlayList2Fill size={size} color={color} />,
    ],
    data: ["", "", "", "", ""],
  },
};

const library = () => {
  return (
    <div className={classes.container}>
      {Object.entries(libraryData).map(
        ([section, elements]) =>
          elements.data.length > 0 && (
            <div key={section} className={classes.section}>
              <h2>{section}</h2>
              <div className={classes.bottom}>
                {elements.data.map((element, index) => (
                  <Link href={singlevideo.videoLink}>
                    <LibraryVideoCard
                      title={singlevideo.title}
                      channel={singlevideo.channel}
                      views={singlevideo.views}
                      timestamp={singlevideo.timestamp}
                      timeDuration={singlevideo.timeDuration}
                      thumbnail={singlevideo.thumbnail}
                      key={index}
                      icons={elements.icons}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default library;
