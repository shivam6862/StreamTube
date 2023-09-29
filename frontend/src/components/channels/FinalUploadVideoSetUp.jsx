"use client";
import classes from "../../styles/channel/FinalUploadVideoSetUp.module.css";
import { BsInfoSquare } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const FinalUploadVideoSetUp = ({ FinaluploadVideoHide }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <div className={classes.topleft}>UploadVideos</div>
          <div className={classes.topright}>
            <div className={classes.toprighttext}>saved as private</div>
            <BsInfoSquare size={20} />
            <RxCross2 size={22} onClick={FinaluploadVideoHide} />
          </div>
        </div>
        <div className={classes.middle}></div>
        <div className={classes.bottom}>
          <div className={classes.bottomleft}></div>
          <div className={classes.bottomright}></div>
        </div>
      </div>
    </div>
  );
};

export default FinalUploadVideoSetUp;
