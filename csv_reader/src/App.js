import Upload from "./pages/CSV_Upload";
import Header from "../src/components/header/Header";
import Style from "./styles/global";
import { Container, Content } from "./styles/styles";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Header />
          <Upload />
        </Content>
        <Style />
      </Container>
    </div>
  );
}

export default App;
