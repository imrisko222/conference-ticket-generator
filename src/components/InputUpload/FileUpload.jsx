import React from "react";
import { useState } from "react";
import FilePreview from "./FilePreview";
import FileUploadPrompt from "./FileUploadPrompt";

const FileUpload = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  // const file¬Handler = (event) => {
  //   const file = event.target.files[0]

  //   if (file) {

  //   }
  // }

  return (
    <>
      {uploadedPhoto ? (
        <FilePreview onRemove={setUploadedPhoto} />
      ) : (
        <FileUploadPrompt onFileSelect={setUploadedPhoto} />
      )}
    </>
  );
};

export default FileUpload;
