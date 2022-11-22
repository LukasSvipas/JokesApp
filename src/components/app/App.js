import Header from "../header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Home from "../home/Home";
import Favorites from "../favorites/Favorites";
import Search from "../search/Search";

function App() {
  return (
    <Container>
        <Router>
            <Header/>
            <Container style={{marginTop:'80px'}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/my-jokes" element={<Favorites/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </Container>
        </Router>
    </Container>
  );
}

export default App;
