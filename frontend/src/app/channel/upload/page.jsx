"use client";
import classes from "../../../styles/channel/Upload.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const upload = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>upload</div>
    </div>
  );
};

export default upload;
