import React from "react";
import { useState } from "react";
import FilePreview from "./FilePreview";
import FileUploadPrompt from "./FileUploadPrompt";
const FileUpload = () => {
  const [preview, setPreview] = useState("");

  return <>{preview ? <FilePreview /> : <FileUploadPrompt />}</>;
};

export default FileUpload;
