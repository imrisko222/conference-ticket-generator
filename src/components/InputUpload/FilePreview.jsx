import React from "react";
import ImageAvatar from "../../assets/images/image-avatar.JPG";
import styles from "./FilePreview.module.css";

const FilePreview = ({ onRemove }) => {
  // TODO
  // 1. po removenuti obrazka sa objavuje okno s uploadnutim obrazka. vyrieseit to.
  const removePhotoHandler = (event) => {
    onRemove(null);
  };

  return (
    <div className={styles.componentContainer}>
      <img src={ImageAvatar} alt="image of avatar" />
      <div className={styles.buttonContainer}>
        <button type="button" onClick={removePhotoHandler}>
          Remove image
        </button>
        <button
          type="button"
          onClick={() => document.getElementById("sad")?.click()}
        >
          Change image
        </button>
        <input
          type="file"
          id="sad"
          className={styles.changeFile}
          accept="image/jpeg, image/png"
        />
      </div>
    </div>
  );
};

export default FilePreview;
