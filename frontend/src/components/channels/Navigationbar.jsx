"use client";
import classes from "../../styles/channel/Navigationbar.module.css";
import Link from "next/link";
import {
  FaLanguage,
  FaCopyright,
  FaMoneyBillWave,
  FaComments,
  FaCaretSquareLeft,
  FaUpload,
  FaChartLine,
} from "react-icons/fa";

const size = 19;
const data = {
  Channel: [
    {
      href: "/channel",
      text: "dashboard",
      icon: <FaCaretSquareLeft size={size} />,
    },
    {
      href: "/channel/upload",
      text: "content",
      icon: <FaUpload size={size} />,
    },
    {
      href: "/channel/analytics",
      text: "analytics",
      icon: <FaChartLine size={size} />,
    },
    {
      href: "/channel/comments",
      text: "comments",
      icon: <FaComments size={size} />,
    },
    {
      href: "/channel/translations",
      text: "subtitles",
      icon: <FaLanguage size={size} />,
    },
    {
      href: "/channel/copyright",
      text: "copyright",
      icon: <FaCopyright size={size} />,
    },
    {
      href: "/channel/monetization",
      text: "earn",
      icon: <FaMoneyBillWave size={size} />,
    },
  ],
};

const Navigationbar = () => {
  return (
    <div className={classes.container}>
      {Object.entries(data).map(
        ([section, elements]) =>
          elements.length > 0 && (
            <div key={section} className={classes.section}>
              <h2>{section}</h2>
              <div className={classes.elements}>
                {elements.map(({ text, icon, href }) => (
                  <Link
                    href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${href}`}
                    key={href}
                  >
                    <div key={text} className={classes.element}>
                      <div className={classes.icon}>{icon}</div>
                      <div className={classes.name}>{text}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Navigationbar;
