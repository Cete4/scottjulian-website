import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import About from "./components/about/index.js";
import {Container, Grid} from "@mui/material";

function App() {
    return (
        <div>
            <Container>
                <Header/>
                <Grid item xs={12}>
                    <About/>
                </Grid>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
