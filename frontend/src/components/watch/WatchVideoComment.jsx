"use client";
import { useState } from "react";
import classes from "../../styles/watch/WatchVideoComment.module.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillCaretDown,
} from "react-icons/ai";

const WatchVideoComment = ({ comment, comments, userimage }) => {
  const [showIndex, setShowIndex] = useState(-1);
  const timeUnits = [
    { unit: "year", milliseconds: 365 * 24 * 60 * 60 * 1000 },
    { unit: "month", milliseconds: 30 * 24 * 60 * 60 * 1000 },
    { unit: "day", milliseconds: 24 * 60 * 60 * 1000 },
    { unit: "hour", milliseconds: 60 * 60 * 1000 },
    { unit: "minute", milliseconds: 60 * 1000 },
    { unit: "second", milliseconds: 1000 },
  ];
  const currentTime = new Date();
  const videoCreationTime = new Date(comment.time);
  const timeDifferenceMilliseconds = currentTime - videoCreationTime;
  let maxTimeUnit = timeUnits[timeUnits.length - 1];
  for (let i = 0; i < timeUnits.length; i++) {
    const timeUnit = timeUnits[i];
    if (timeDifferenceMilliseconds >= timeUnit.milliseconds) {
      maxTimeUnit = timeUnit;
      break;
    }
  }
  const timeDifference =
    Math.round(timeDifferenceMilliseconds / maxTimeUnit.milliseconds) +
    " " +
    maxTimeUnit.unit +
    (Math.round(timeDifferenceMilliseconds / maxTimeUnit.milliseconds) > 1
      ? "s"
      : "") +
    " ago";

  return (
    <div className={classes.container}>
      <div className={classes.heading_comment_count}>
        {comments.length} Comments
      </div>
      <div className={classes.user_comment_input}>
        <img src={userimage} alt="img" />
        <input type="text" placeholder="Add a comment..." />
      </div>
      <div className={classes.box}>
        {comments.map((item, index) => (
          <div key={index} className={classes.eachitem}>
            <div className={classes.userimage}>
              <img src={comment.userimage} alt="img" />
            </div>
            <div className={classes.aboutuser}>
              <div className={classes.channelname_time}>
                <div className={classes.channelname}>
                  @{comment.channelname}
                </div>
                <div className={classes.time}>{timeDifference}</div>
              </div>
              <div className={classes.message}>{comment.message}</div>
              <div className={classes.like_dislike}>
                <AiOutlineLike size={20} />
                {comment.likecount}
                <AiOutlineDislike size={20} />
                <button>reply</button>
              </div>
              {comment.reply.length > 0 && (
                <div className={classes.replies}>
                  <div
                    className={classes.replies_button}
                    onClick={() => {
                      setShowIndex(index);
                    }}
                  >
                    <AiFillCaretDown size={14} color="blue" />
                    {comment.reply.length}
                    {"   "}replies
                  </div>
                  {showIndex == index &&
                    comment.reply.map((item, key) => (
                      <div key={key} className={classes.eachitem}>
                        <div className={classes.userimage}>
                          <img src={comment.userimage} alt="img" />
                        </div>
                        <div className={classes.aboutuser}>
                          <div className={classes.channelname_time}>
                            <div className={classes.channelname}>
                              @{comment.channelname}
                            </div>
                            <div className={classes.time}>{timeDifference}</div>
                          </div>
                          <div className={classes.message}>
                            {comment.message}
                          </div>
                          <div className={classes.like_dislike}>
                            <AiOutlineLike size={20} />
                            {comment.likecount}
                            <AiOutlineDislike size={20} />
                            <button>reply</button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchVideoComment;
