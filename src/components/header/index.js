import './style.css';
import {Nav, Navbar, Row} from "react-bootstrap";
import websitelogo from '../../assets/images/websitegeneric/websitelogo.jpg';
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <Row className='centeredrow'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <img className='websitelogo' src={websitelogo} alt='Website Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <FontAwesomeIcon icon={faBarsStaggered} className="fa-2xl"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/*TODO: Add the hrefs here*/}
                        <Nav.Link href="" className="headerlink"><a className='headertag'>Home</a></Nav.Link>
                        <Nav.Link href="" className="headerlink"><a className='headertag'>Portfolio</a></Nav.Link>
                        <Nav.Link href="" className="headerlink"><a className='headertag'>About</a></Nav.Link>
                        <Nav.Link href="" className="headerlink"><a className='headertag'>Contact</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <FontAwesomeIcon icon="fa fa-bars-sort"/>
        </Row>
    );
}

export default Header;