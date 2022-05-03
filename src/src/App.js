import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import {BrowserRouter, Route} from "react-router-dom";
import Contact from "./components/contact/index.js";
import About from "./components/about/index.js";

function App() {
    return (
        <div>


            <Container fluid>
                <Header/>
                <Footer/>
            </Container>

        </div>
    );
}

export default App;
