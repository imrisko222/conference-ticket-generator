import React, { useState } from "react";
import styles from "./Form.module.css";
import FileUpload from "../InputUpload/FileUpload";

const Form = ({ onSetFormData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userName: "",
    file: null,
  });

  // Odoslanie formulara - treba vymazat console log
  const submitHandler = (event) => {
    event.preventDefault();
    onSetFormData(formData);
  };

  // Aktualizacia textovych inputov
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funk na spracovanie uploadnuteho suboru
  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      file, // ukladam cely file objekt
    }));
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      {/* ZACIATOK INPUT FILE */}
      {/* nasledujuci div sa venuje uploadovaniu */}
      <div className={styles.inputFileContainer}>
        <p className={styles.smallInformation}>Upload Avatar</p>
        <label className={styles.labelStyle} htmlFor="uploadInput">
          <FileUpload premenovaneOnFileSelect={handleFileChange} />
        </label>
        <p className={styles.smallInformation}>
          Upload your photo (JPG or PNG, max size: 5MB).
        </p>
      </div>
      {/* KONIEC INPUT FILE */}

      <label htmlFor="fullName" className={styles.labelStyle}>
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className={styles.inputStyle}
      />

      <label htmlFor="emailAddress" className={styles.labelStyle}>
        Email Address
      </label>
      <input
        type="email"
        id="emailAddress"
        required
        placeholder="example@email.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.inputStyle}
      />

      <label htmlFor="userName" className={styles.labelStyle}>
        Github Username
      </label>
      <input
        type="text"
        id="userName"
        placeholder="@yournick"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        className={styles.inputStyle}
      />
      <button className={styles.buttonSubmit} type="submit">
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
