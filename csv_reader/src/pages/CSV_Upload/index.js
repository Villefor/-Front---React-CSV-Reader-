import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";
import Papa from "papaparse";

import Table from "../../components/Table/Table";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function CVS_Upload({ handle_delete, handle_add }) {
  const [parsedCsvData, setParsedCsvData] = useState([]);

  const add_data = (obj) => {
    handle_add(obj);
    setParsedCsvData([...parsedCsvData, obj]);
  };

  const delete_data = (index) => () => {
    parsedCsvData.splice(index, 1);
    handle_delete(index);
    setParsedCsvData(parsedCsvData);
  };

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setParsedCsvData(results.data);
      },
    });
  };

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
      <Table
        parsedCsvData={parsedCsvData}
        delete_data={delete_data}
        add_data={add_data}
      />
    </section>
  );
}

export default CVS_Upload;
