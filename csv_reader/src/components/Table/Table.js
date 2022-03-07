import React, { useState } from "react";

const Table = ({ parsedCsvData, delete_data }) => {
  console.log(delete_data);
  return (
    <>
      {parsedCsvData && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {parsedCsvData.map((row, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{row.id}</td>

                  <td>{row.name}</td>

                  <td>{row.telephone}</td>

                  <td>
                    <button onClick={delete_data}>Deletar</button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
