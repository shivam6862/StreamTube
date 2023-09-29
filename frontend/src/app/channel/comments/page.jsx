"use client";
import classes from "../../../styles/channel/Comments.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const comments = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>Comments</div>
    </div>
  );
};

export default comments;
