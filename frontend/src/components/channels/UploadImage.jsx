import React, { useEffect, useState } from "react";
import classes from "../../styles/channel/UploadImage.module.css";
import { AiOutlineFileImage } from "react-icons/ai";

const UploadImage = ({ ids, srcLink, setImageToBackend }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    setSelectedImage(srcLink);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setImageToBackend(file);
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.file_input_wrapper}>
      <input
        type="file"
        id={ids}
        name={ids}
        className={classes.file_input}
        onChange={handleFileUpload}
      />
      <div className={selectedImage ? classes.part1_b_a : ""}>
        {selectedImage && <img src={selectedImage} alt="image" />}
      </div>
      <label htmlFor={ids} className={classes.file_input_label}>
        <AiOutlineFileImage size={30} />
        Upload thumbnail
        <div className={classes.reupload}>
          {selectedImage && <AiOutlineFileImage size={25} />}
        </div>
      </label>
    </div>
  );
};

export default UploadImage;
