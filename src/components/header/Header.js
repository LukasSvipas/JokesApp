import {Container, Navbar} from "react-bootstrap";
import Navigation from "../navigation/Navigation";
const Header =() =>{
    return(
        <Navbar bg='primary' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand>Jokes APP</Navbar.Brand>
                <Navigation/>
            </Container>
        </Navbar>
        )

}
export default Header