import React, { useState } from "react";

const Table = ({ parsedCsvData, delete_data, add_data }) => {
  const [show, setShow] = useState(false);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const handle_show = () => {
    setShow(!show);
  };

  const handle_add = () => {
    const obj = {
      id,
      name,
      telephone,
    };
    if (id !== "" && name !== "" && telephone !== "") add_data(obj);
  };

  return (
    <>
      <button onClick={handle_show}>Adicionar cédula</button>
      {parsedCsvData && (
        <table>
          {show && (
            <tr>
              <td>
                <input onChange={(event) => setID(event.target.value)} />
              </td>
              <td>
                <input onChange={(event) => setName(event.target.value)} />
              </td>
              <td>
                <input onChange={(event) => setTelephone(event.target.value)} />
              </td>
              <td>
                <button onClick={handle_add}>Adicionar</button>
              </td>
            </tr>
          )}
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
                    <button onClick={delete_data(index)}>Deletar</button>
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
