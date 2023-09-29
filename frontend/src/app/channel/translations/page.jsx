"use client";
import classes from "../../../styles/channel/Translations.module.css";
import Navigationbar from "../../../components/channels/Navigationbar";

const translations = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigationbar />
      </div>
      <div className={classes.right}>Translations</div>
    </div>
  );
};

export default translations;
