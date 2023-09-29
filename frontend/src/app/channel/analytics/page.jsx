"use client";
import classes from "../../../styles/channel/Analytics.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const analytics = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>Analytics</div>
    </div>
  );
};

export default analytics;
