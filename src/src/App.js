import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import About from "./components/about/index.js";

function App() {
    return (
        <div>
            <Container fluid>
                <Header/>
                <Row>
                    <Col>
                        <About/>
                    </Col>
                </Row>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
