"use client";
import classes from "../../../styles/channel/Monetization.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const monetization = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>Monetization</div>
    </div>
  );
};

export default monetization;
