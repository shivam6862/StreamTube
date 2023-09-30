"use client";
import classes from "../../styles/channel/FinalUploadVideoSetUp.module.css";
import { BsInfoSquare } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineCopy,
  AiOutlineQuestionCircle,
  AiOutlineUpload,
} from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";
import { BsHourglassSplit } from "react-icons/bs";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { embedlink } from "../../../public/singlevideo.json";

const FinalUploadVideoSetUp = ({ FinaluploadVideoHide }) => {
  const [imageToBackend, setImageToBackend] = useState(null);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <div className={classes.topleft}>UploadVideos</div>
          <div className={classes.topright}>
            <div className={classes.toprighttext}>saved as private</div>
            <BsInfoSquare size={20} />
            <RxCross2 size={22} onClick={FinaluploadVideoHide} />
          </div>
        </div>
        <div className={classes.overflowscroll}>
          <div className={classes.middle}>
            <div className={classes.middleitem}>
              details
              <GoIssueClosed size={20} color="blue" />
            </div>
            <div className={classes.middleitem}>
              video elements <GoIssueClosed size={20} color="blue" />
            </div>
            <div className={classes.middleitem}>
              checks <GoIssueClosed size={20} color="black" />
            </div>
            <div className={classes.middleitem}>
              visibility <GoIssueClosed size={20} color="blue" />
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottomleft}>
              <div className={classes.bottomlefttop}>
                <div className={classes.bottomlefttop1}>Details</div>
                <div className={classes.bottomlefttop2}>reuse details</div>
              </div>
              <div className={classes.textareas}>
                <div className={classes.textareaHeading}>
                  Title (required) <AiOutlineQuestionCircle size={20} />
                </div>
                <textarea name="" id="title" cols="30" rows="10"></textarea>
              </div>
              <div className={classes.textareas}>
                <div className={classes.textareaHeading}>
                  Description <AiOutlineQuestionCircle size={20} />
                </div>
                <textarea
                  name=""
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className={classes.thumbnail}>
                <h2>thumbnail</h2>
                <p>
                  Select or upload a picture that show which in your video . A
                  good thumbnail stand out and draw viewers attention.{" "}
                  <span>Learn more</span>
                </p>
                <div className={classes.thumbnailanimationcontainer}>
                  <div className={classes.thumbnailanimationfirst}>
                    <div className={classes.svgquestion}>
                      <AiOutlineQuestionCircle size={20} />
                    </div>
                    <UploadImage
                      ids="thumbnail"
                      srcLink=""
                      setImageToBackend={setImageToBackend}
                    />
                  </div>
                  <div className={classes.thumbnailanimation}>
                    <div className={classes.svgquestion}>
                      <AiOutlineQuestionCircle size={20} />
                    </div>
                  </div>
                  <div className={classes.thumbnailanimation}>
                    <div className={classes.svgquestion}>
                      <AiOutlineQuestionCircle size={20} />
                    </div>
                  </div>
                  <div className={classes.thumbnailanimation}>
                    <div className={classes.svgquestion}>
                      <AiOutlineQuestionCircle size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bottomright}>
              <div className={classes.videoiframe}>
                <iframe src={embedlink} title={""}></iframe>
              </div>
              <div className={classes.videolink}>
                <div className={classes.videolinkitem}>
                  <p>Viedo link</p>
                  <h5>{embedlink}</h5>
                </div>
                <div className={classes.videolinkitem}>
                  <AiOutlineCopy size={22} color="blue" />
                </div>
              </div>
              <div className={classes.filename}>
                <p>Filename</p>
                <h5>channel.mp4</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.footerleft}>
            <AiOutlineUpload size={22} color="blue" />
            <BsHourglassSplit size={22} color="blue" />
            <GoIssueClosed size={22} color="blue" />
            <div>Checks complete No issues found.</div>
          </div>
          <div className={classes.footerright}>
            <button>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalUploadVideoSetUp;
