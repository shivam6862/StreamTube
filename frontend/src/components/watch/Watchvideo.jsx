"use client";
import classes from "../../styles/watch/Watchvideo.module.css";
import { VscVerifiedFilled } from "react-icons/vsc";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BiCut } from "react-icons/bi";
import { TfiSave } from "react-icons/tfi";
import { BsFlag } from "react-icons/bs";

const Watchvideo = ({ singlevideo }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <iframe src={singlevideo.embedlink}></iframe>
        </div>
        <div className={classes.bottom}>
          <div className={classes.title}>{singlevideo.title}</div>
          <div className={classes.extra_buttons_and_about_user}>
            <div className={classes.left}>
              <div className={classes.left_left}>
                <div className={classes.left_left_img}>
                  <img src={singlevideo.channelImage} alt="channelImg" />
                </div>
                <div className={classes.left_left_about_user}>
                  <div className={classes.left_left_about_user_channel}>
                    {singlevideo.channel}
                    <VscVerifiedFilled size={20} />
                  </div>
                  <div className={classes.left_left_about_user_subscribers}>
                    {singlevideo.subscribers} subscribers
                  </div>
                </div>
              </div>
              <div className={classes.left_right}>
                <button>Subscribe</button>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.like_unlike}>
                <AiOutlineLike size={25} />
                {singlevideo.like}
                <AiOutlineDislike size={25} />
              </div>
              <div className={classes.share}>
                <PiShareFat size={25} />
              </div>
              <div className={classes.other_icon}>
                <GoDownload size={23} />
                <BiCut size={23} />
                <TfiSave size={23} />
                <BsFlag size={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchvideo;
