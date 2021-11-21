import '../App.css';
import Container from "../components/Container"
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default App;
