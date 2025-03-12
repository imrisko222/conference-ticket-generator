import React, { useRef } from "react";
// import ImageAvatar from "../../assets/images/image-avatar.JPG";
import styles from "./FilePreview.module.css";

const FilePreview = ({ userPhoto, onRemovePhoto }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      onRemovePhoto(fileUrl);

      return () => URL.revokeObjectURL(fileUrl);
    }
  };

  const removePhotoHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemovePhoto(null);

    if (userPhoto) {
      URL.revokeObjectURL(userPhoto);
    }
  };

  return (
    <div className={styles.componentContainer}>
      <img src={userPhoto} alt="User profile avatar" />
      <div className={styles.buttonContainer}>
        <button type="button" onClick={removePhotoHandler}>
          Remove image
        </button>
        <button type="button" onClick={() => fileInputRef.current?.click()}>
          Change image
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.changeFile}
          accept="image/jpeg, image/png"
        />
      </div>
    </div>
  );
};

export default FilePreview;
