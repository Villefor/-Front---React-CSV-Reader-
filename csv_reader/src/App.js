import React, { useState } from "react";
import Upload from "./pages/CSV_Upload";
import Header from "../src/components/header/Header";
import Style from "./styles/global";
import { Container, Content } from "./styles/styles";
import "./App.scss";

function App() {
  const [minor_one, setMinor] = useState([]);
  const [plus_one, setPlus] = useState([]);

  const handle_delete = (index) => {
    setMinor([...minor_one, index]);
  };

  const handle_add = (obj) => {
    setPlus([...plus_one, obj]);
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Header />
          <Upload handle_delete={handle_delete} handle_add={handle_add} />
        </Content>
        <Style />
      </Container>
    </div>
  );
}

export default App;
