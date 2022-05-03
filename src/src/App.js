import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Header from "./components/header/index.js";

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Header/>
            </Container>
        </div>
    );
}

export default App;
