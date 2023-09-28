"use client";
import React from "react";
import classes from "../../styles/layout/NavigationMenu.module.css";
import {
  FaHome,
  FaFilm,
  FaMusic,
  FaGamepad,
  FaCog,
  FaQuestion,
  FaInfoCircle,
  FaLock,
  FaNewspaper,
  FaBell,
  FaBook,
  FaClock,
  FaVideo,
  FaHourglass,
  FaFire,
  FaShoppingCart,
  FaFutbol,
  FaGraduationCap,
  FaPalette,
  FaChild,
  FaWrench,
} from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiXdadevelopers } from "react-icons/si";
import { BiTerminal, BiTestTube } from "react-icons/bi";
import { MdOutlinePolicy } from "react-icons/md";
import { AiFillCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

const size = 19;
const data = {
  top: [
    { element: "home", icon: <FaHome size={size} />, href: "/" },
    { element: "shorts", icon: <FaFilm size={size} />, href: "shorts" },
    {
      element: "subscriptions",
      icon: <FaBell size={size} />,
      href: "subscriptions",
    },
    { element: "library", icon: <FaBook size={size} />, href: "library" },
    { element: "history", icon: <FaClock size={size} />, href: "history" },
    {
      element: "your videos",
      icon: <FaVideo size={size} />,
      href: "yourVideos",
    },
    {
      element: "watch later",
      icon: <FaHourglass size={size} />,
      href: "watchLater",
    },
  ],
  "show more": [],
  subscription: [],
  explore: [
    { element: "trending", icon: <FaFire size={size} />, href: "trending" },
    {
      element: "shopping",
      icon: <FaShoppingCart size={size} />,
      href: "shopping",
    },
    { element: "music", icon: <FaMusic size={size} />, href: "music" },
    { element: "films", icon: <FaFilm size={size} />, href: "films" },
    { element: "live", icon: <FaVideo size={size} />, href: "live" },
    { element: "gaming", icon: <FaGamepad size={size} />, href: "gaming" },
    { element: "news", icon: <FaNewspaper size={size} />, href: "news" },
    { element: "sport", icon: <FaFutbol size={size} />, href: "sport" },
    {
      element: "learning",
      icon: <FaGraduationCap size={size} />,
      href: "learning",
    },
    {
      element: "fashion & beauty",
      icon: <FaPalette size={size} />,
      href: "fashionBeauty",
    },
  ],
  "more from youtube": [
    {
      element: "youtube premium",
      icon: <FaLock size={size} />,
      href: "youtubePremium",
    },
    {
      element: "youtube studio",
      icon: <FaFilm size={size} />,
      href: "youtubeStudio",
    },
    {
      element: "youtube music",
      icon: <FaMusic size={size} />,
      href: "youtubeMusic",
    },
    {
      element: "youtube kids",
      icon: <FaChild size={size} />,
      href: "youtubeKids",
    },
  ],
  more: [
    { element: "settings", icon: <FaCog size={size} />, href: "settings" },
    {
      element: "report history",
      icon: <FaNewspaper size={size} />,
      href: "reportHistory",
    },
    { element: "help", icon: <FaQuestion size={size} />, href: "help" },
    {
      element: "send feedback",
      icon: <FaWrench size={size} />,
      href: "sendFeedback",
    },
  ],
  about: [
    { element: "about", icon: <FaInfoCircle size={size} />, href: "about" },
    { element: "press", icon: <FaNewspaper size={size} />, href: "press" },
    { element: "copyright", icon: <FaLock size={size} />, href: "copyright" },
    { element: "contact us", icon: <FaBell size={size} />, href: "contact us" },
    { element: "creator", icon: <FaPalette size={size} />, href: "creator" },
    {
      element: "advertise",
      icon: <RiAdvertisementLine size={size} />,
      href: "advertise",
    },
    {
      element: "developers",
      icon: <SiXdadevelopers size={size} />,
      href: "developers",
    },
    { element: "terms", icon: <BiTerminal size={size} />, href: "terms" },
    { element: "privacy", icon: <FaLock size={size} />, href: "privacy" },
    {
      element: "policy & safety",
      icon: <MdOutlinePolicy size={size} />,
      href: "policySafety",
    },
    {
      element: "how youtube works",
      icon: <FaFilm size={size} />,
      href: "howYoutubeWorks",
    },
    {
      element: "test new features",
      icon: <BiTestTube size={size} />,
      href: "testNewFeatures",
    },
    {
      element: "© 2023 shivam6862",
      icon: <AiFillCopyrightCircle size={size} />,
      href: "©2023shivam6862",
    },
  ],
};

const NavigationMenu = ({}) => {
  return (
    <div className={classes.container}>
      {Object.entries(data).map(
        ([section, elements]) =>
          elements.length > 0 && (
            <div key={section} className={classes.section}>
              <h2>{section}</h2>
              <div className={classes.elements}>
                {elements.map(({ element, icon, href }) => (
                  <Link
                    href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${href}`}
                    key={href}
                  >
                    <div key={element} className={classes.element}>
                      <div className={classes.icon}>{icon}</div>
                      <div className={classes.name}>{element}</div>
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

export default NavigationMenu;
