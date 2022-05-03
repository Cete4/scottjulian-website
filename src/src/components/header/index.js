import './style.css';
import {Col, Nav, Row} from "react-bootstrap";
import websitelogo from '../../assets/images/websitegeneric/websitelogo.jpg';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Row className='centeredrow'>
            <Col>
                <a href='/'>Home</a>
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