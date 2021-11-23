import '../App.css';
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Container from '../components/Container';

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default App;
