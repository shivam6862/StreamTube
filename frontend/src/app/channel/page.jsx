"use client";
import classes from "../../styles/channel/Channel.module.css";
import Navigationbar from "../../components/channels/Navigationbar";
import pageData from "../../../public/pageData.json";
import { useState } from "react";
import Backdrop from "../../ui/Backdrop";
import UploadVideos from "../../components/channels/UploadVideos";
import FinalUploadVideoSetUp from "../../components/channels/FinalUploadVideoSetUp";

const channel = () => {
  const image = pageData.image;

  const [toggleUploadVideo, setToggleUploadVideo] = useState(false);
  const [openFinalupload, setOpenFinalupload] = useState(false);

  const uploadVideoHide = () => {
    setToggleUploadVideo(false);
  };
  const uploadVideoShow = () => {
    setToggleUploadVideo(true);
  };

  const FinaluploadVideoHide = () => {
    setOpenFinalupload(false);
  };
  const FinaluploadVideoShow = () => {
    setOpenFinalupload(true);
  };

  return (
    <div className={classes.container}>
      {toggleUploadVideo && <Backdrop onClick={uploadVideoHide} />}
      {toggleUploadVideo && (
        <UploadVideos
          uploadVideoHide={uploadVideoHide}
          FinaluploadVideoShow={FinaluploadVideoShow}
        />
      )}

      {openFinalupload && <Backdrop onClick={FinaluploadVideoHide} />}
      {openFinalupload && (
        <FinalUploadVideoSetUp FinaluploadVideoHide={FinaluploadVideoHide} />
      )}

      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>
        <div className={classes.rightitem}>
          <div className={classes.box}>
            <img src={image} alt="img" />
            <p>Want to see metrics on your recent video?</p>
            <p>Upload and publish a video to get started.</p>
            <button onClick={uploadVideoShow}>Upload videos</button>
          </div>
        </div>
        <div className={classes.rightitem}>
          <div className={classes.box}>
            <h2>Channel analytics</h2>
            <h4>Current subscribers 0</h4>
            <p>Summary Last 28 days</p>
            <p>Views 0 —</p>
            <p>Watch time (hours) 0.0 —</p>
            <p>Top videos</p>
            <p>Last 48 hours · Views</p>
          </div>
        </div>
        <div className={classes.rightitem}>
          <div className={classes.box}>
            <h2>News</h2>
            <h5>Your Next Idea Starts Here</h5>
            <p>
              Whether you're looking for inspiration for your next video,
              general YouTube knowledge, or opportunities to get ahead of rising
              trends, here are some top trends our experts are seeing around the
              world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default channel;
