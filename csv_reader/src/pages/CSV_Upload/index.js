import React, { useState } from "react";
// import Table from "../../components/Table";
// import styles from "./styles";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function CVS_Upload(isDragActive, isDragReject) {
  // const [highLighted, setLogin] = useState(false);
  // const [csv_content, setCSV] = useState(null);
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    header: "",
    content: "",
  });

  const parse_csv = (text) => {
    const text_result = {
      header: [],
      data: [],
    };
    console.log(text_result);
  };

  //     const [header, ...content] = text.split("/n");

  //     text_result.header = header.split(",");

  //     const max_columns = text_result.header.length;

  //     content.forEach((data_lines) => {
  //       text_result.data.push(data_lines.split(",").slice(0, max_columns));
  //     });
  //   };

  //   const handle_upload = (files) => {
  //     const uploaded_files = files.map((file) => ({
  //       file,
  //       name: file.name,
  //     }));
  //   };

  const drag_message = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste sua planilha aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Arquivo não suportado, apenas arquivos em CSV
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <section className={"upload_container"}>
      <Dropzone
        accept=".csv, application/vnd.ms-excel, text/csv"
        onDrop={(event) => {
          console.log(event);
          setList(event);
          if (list !== 0) {
            parse_csv(list);
            console.log(data);
          }
        }}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {drag_message(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
      {/* <Table csv_content={csv_content} /> */}
    </section>
  );
}

export default CVS_Upload;
