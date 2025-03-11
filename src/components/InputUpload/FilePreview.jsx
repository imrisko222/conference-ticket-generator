import React from "react";
import ImageAvatar from "../../assets/images/image-avatar.JPG";
import styles from "./FilePreview.module.css";

const FilePreview = () => {
  // TODO
  // 1. spravit funkcie pre buttons na vymazanie obrazka a zmenu obrazka
  // 2. clickHandler je docasny, potom zmazat
  const clickHandler = () => {
    console.log("hello world");
  };
  return (
    <div className={styles.componentContainer}>
      <img src={ImageAvatar} alt="image of avatar" />
      <div className={styles.buttonContainer}>
        <button type="button" onClick={clickHandler}>
          Remove image
        </button>
        <button type="button" onClick={clickHandler}>
          Change image
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
