import React from "react";
import Link from "next/link";
import classes from "../styles/Notfound.module.css";

const PageNotFound = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <Link href={"/"}>Go Home</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
