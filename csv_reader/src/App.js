import Upload from "./pages/CSV_Upload";
import Style from "./styles/global";
import { Container, Content } from "./styles/styles";

function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Upload />
        </Content>
        <Style />
      </Container>
    </div>
  );
}

export default App;
