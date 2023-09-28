import React from "react";
import classes from "../../styles/histroy/ShortCard.module.css";

const ShortCard = ({ title, views, thumbnail, shortLink }) => {
  return (
    <div className={classes.videocard}>
      <iframe src={shortLink} title={title}></iframe>
      <h5>{title}</h5>
      <p>{views}</p>
    </div>
  );
};

export default ShortCard;
