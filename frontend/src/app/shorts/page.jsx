"use client";
import classes from "../../styles/Shorts.module.css";
import { v4 } from "uuid";
import { redirect } from "next/navigation";

const Shorts = () => {
  const id = v4();
  if (id != null) redirect(`shorts/${id}`);

  return (
    <div className={classes.container}>
      <div style={{ fontSize: "2rem" }}>Shorts</div>
    </div>
  );
};

export default Shorts;
