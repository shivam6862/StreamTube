"use client";
import classes from "../../../styles/Watch.module.css";
import { usePathname } from "next/navigation";

const WatchByID = () => {
  const id = usePathname().substring(7);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.left}>
          <div className={classes.top}>Top</div>
          <div className={classes.bottom}>Bottom</div>
        </div>
        <div className={classes.right}>{id}</div>
      </div>
    </div>
  );
};
export default WatchByID;
