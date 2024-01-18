"use client";
import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

const NotificationContext = React.createContext({
  typeMessage: [],
  onMessage: (message) => {},
  onDelete: (id) => {},
});

export const NotificationContextProvider = (props) => {
  const [typeMessage, setTypeMessage] = useState([]);

  const messageHandler = (title, message, type, logo) => {
    setTypeMessage((prev) => [
      ...prev,
      { title: title, message: message, id: v4(), type: type, logo: logo },
    ]);
  };
  const onDeleteHandler = (id) => {
    setTypeMessage((prev) => prev.filter((note) => note.id != id));
  };

  return (
    <NotificationContext.Provider
      value={{
        typeMessage: typeMessage,
        onMessage: messageHandler,
        onDelete: onDeleteHandler,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
