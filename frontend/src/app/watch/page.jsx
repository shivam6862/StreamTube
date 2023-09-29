"use client";
import { v4 } from "uuid";
import { redirect } from "next/navigation";

const Watch = () => {
  const id = v4();
  if (id != null) redirect(`watch/${id}`);

  return (
    <div
      style={{
        height: "93vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "2rem" }}>Watchs</div>
    </div>
  );
};

export default Watch;
