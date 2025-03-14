import React from "react";
import { useState } from "react";
import FilePreview from "./FilePreview";
import FileUploadPrompt from "./FileUploadPrompt";

const FileUpload = ({ premenovaneOnFileSelect }) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  // TODO:
  // 1. dat vhodny nazov pre 'premenovaneOnFileSelect'

  return (
    <>
      {uploadedPhoto ? (
        <FilePreview
          userPhoto={uploadedPhoto}
          onRemovePhoto={setUploadedPhoto}
        />
      ) : (
        <FileUploadPrompt
          onFileSelect={setUploadedPhoto}
          premenovaneOnFileSelect={premenovaneOnFileSelect}
        />
      )}
    </>
  );
};

export default FileUpload;
