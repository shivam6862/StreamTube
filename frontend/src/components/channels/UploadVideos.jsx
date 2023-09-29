"use client";
import classes from "../../styles/channel/UploadVideos.module.css";
import { MdFileUpload } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const UploadVideos = ({ uploadVideoHide, FinaluploadVideoShow }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <div className={classes.topleft}>UploadVideos</div>
          <div className={classes.topright}>
            <BsInfoSquare size={20} />
            <RxCross2 size={22} onClick={uploadVideoHide} />
          </div>
        </div>
        <div className={classes.middle}>
          <div className={classes.uploadbutton}>
            <MdFileUpload size={40} />
          </div>
          <p>Drag and drop video files to upload</p>
          <p>Your videos will be private until you publish them.</p>
          <button
            onClick={() => {
              FinaluploadVideoShow();
              uploadVideoHide();
            }}
          >
            select files
          </button>
        </div>
        <div className={classes.bottom}>
          <p>
            By submitting your videos to YouTube, you acknowledge that you agree
            to YouTube's Terms of Service and
            <span> Community Guidelines.</span>
          </p>
          <p>
            Please make sure that you do not violate others' copyright or
            privacy rights.
            <span>Learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
