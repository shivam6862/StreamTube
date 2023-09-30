"use client";
import classes from "../../../styles/watch/Watch.module.css";
import { usePathname } from "next/navigation";
import Watchvideo from "../../../components/watch/Watchvideo";
import WatchvideoKnowMore from "../../../components/watch/WatchvideoKnowMore";
import WatchVideoComment from "../../../components/watch/WatchVideoComment";
import WatchvideoNavigation from "../../../components/watch/WatchvideoNavigation";
import singlevideo from "../../../../public/singlevideo.json";
import { comments } from "../../../../public/pageData.json";

const WatchByID = () => {
  const id = usePathname().substring(7);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.left}>
          <div className={classes.top}>
            <Watchvideo singlevideo={singlevideo} />
            <WatchvideoKnowMore singlevideo={singlevideo} />
          </div>
          <div className={classes.bottom}>
            <WatchVideoComment
              comment={singlevideo.comments[0]}
              comments={comments}
              userimage={singlevideo.userimage}
            />
          </div>
        </div>
        <div className={classes.right}>
          <WatchvideoNavigation />
        </div>
      </div>
    </div>
  );
};
export default WatchByID;
