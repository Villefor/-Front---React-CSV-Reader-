import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";
import Papa from "papaparse";

import Table from "../../components/Table/Table";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function CVS_Upload() {
  // const [highLighted, setLogin] = useState(false);
  // const [csv_content, setCSV] = useState(null);
  const [parsedCsvData, setParsedCsvData] = useState([]);

  useEffect(() => {
    console.log(parsedCsvData);
  }, []);

  const delete_data = (index) => {
    parsedCsvData.splice(index, 1);
    setParsedCsvData(parsedCsvData);
    console.log(parsedCsvData);
  };

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setParsedCsvData(results.data);
      },
    });
  };
  console.log(parsedCsvData);

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
          if (event.length) {
            parseFile(event[0]);
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
      <Table parsedCsvData={parsedCsvData} delete_data={delete_data} />
    </section>
  );
}

export default CVS_Upload;
