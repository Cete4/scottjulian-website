import './style.css';
import {Col, Row} from "react-bootstrap";
import websitelogo from '../../assets/images/websitegeneric/websitelogo.jpg';

function Header() {
    return (
        <Row className='centeredrow'>
            <Col>
                <a>Home</a>
            </Col>
            <Col>
                <a>About</a>
            </Col>
            <Col>
                <img className='websitelogo' src={websitelogo} alt='Website Logo'/>
            </Col>
            <Col>
                <a>Portfolio</a>
            </Col>
            <Col>
                <a>Contact</a>
            </Col>
        </Row>
    );
}

export default Header;