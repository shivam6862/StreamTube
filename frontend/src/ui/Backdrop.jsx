import classes from "../styles/ui/Backdrop.module.css";
import React from "react";
const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

export default Backdrop;
