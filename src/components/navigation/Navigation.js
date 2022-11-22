import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation =()=>{
    return(
        <Nav defaultActiveKey='/home' as='nav' className='mt-n1'>
            <Nav.Item as='li'>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
                <Nav.Link as={Link} to={"/my-jokes"}>My Jokes</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
                <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default Navigation