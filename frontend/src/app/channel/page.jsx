"use client";
import classes from "../../styles/channel/Channel.module.css";
import Navigationbar from "../../components/channels/Navigationbar";
import pageData from "../../../public/pageData.json";

const channel = () => {
  const image = pageData.image;

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>
        <div className={classes.rightitem}>
          <div className={classes.box}>
            <img src={image} alt="img" />
            <p>Want to see metrics on your recent video?</p>
            <p>Upload and publish a video to get started.</p>
            <button>Upload videos</button>
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
