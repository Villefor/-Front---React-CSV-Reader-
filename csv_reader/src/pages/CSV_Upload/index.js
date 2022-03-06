import React, { useState } from "react";
import Table from "../../components/Table";
import styles from "./styles";
import Dropzone from "react-dropzone";
import { DropContainer } from "./styles";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function CVS_Upload() {
  const [showLogin, setLogin] = useState(false);
  const [csv_content, setCSV] = useState(null);
  const [data, setData] = useState({
    header: "",
    content: "",
  });

  const parse_csv = (text) => {
    const text_result = {
      header: [],
      data: [],
    };

    const [header, ...content] = text.split("/n");

    text_result.header = header.split(",");

    const max_columns = text_result.header.length;

    content.forEach((data_lines) => {
      text_result.data.push(data_lines.split(",").slice(0, max_columns));
    });
  };

  return (
    <section className={styles.upload_container}>
      <Dropzone
        accept=".csv, application/vnd.ms-excel, text/csv"
        onDropAccepted={() => {}}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            className={styles.upload_input_container}
            {...getRootProps()}
            {...isDragActive(isDragActive)}
            {...isDragReject(isDragReject)}
          >
            <input {...getInputProps()} />
          </DropContainer>
        )}
      </Dropzone>
      <Table csv_content={csv_content} />
    </section>
  );
}

export default CVS_Upload;
