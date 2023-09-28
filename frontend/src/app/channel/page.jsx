"use client";
import classes from "../../styles/channel/Channel.module.css";
import Link from "next/link";

const channel = () => {
  return (
    <div className={classes.container}>
      <div>channel</div>
      <Link href={"/channel/analytics"}>analytics</Link>
      <Link href={"/channel/comments"}>comments</Link>
      <Link href={"/channel/copyright"}>copyright</Link>
      <Link href={"/channel/monetization"}>monetization</Link>
      <Link href={"/channel/translations"}>translations</Link>
      <Link href={"/channel/upload"}>upload</Link>
    </div>
  );
};

export default channel;
