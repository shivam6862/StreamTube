"use client";
import classes from "../../../styles/channel/Copyright.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const copyright = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>Copyright</div>
    </div>
  );
};

export default copyright;
