import {useState, useEffect} from "react";
import Search from "../search/Search";
import Joke from "../joke/Joke";
import {Row} from "react-bootstrap";

const Home = () =>{
    const [jokes, setJokes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');  //liftinimas

    const handelSearch = (term) =>{
        setSearchTerm(term)
    }

    useEffect(()=>{
        try{
            fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
                .then(response=>response.json())
                .then(data=>setJokes(data.result))
        }catch (msg){
            console.log(msg)
        }
    },[searchTerm])

    searchTerm && console.log(jokes)
    return(
        <div>
            <Search onSearch = {handelSearch} />
            {jokes &&
                <div className="container-fluid">
                    <h2>Jokes results</h2>
                        <Row>
                            {jokes?.map(joke => <Joke
                                id={joke.id}
                                value={joke.value}
                                url={joke.url}
                            />)}
                        </Row>
                </div>}
        </div>
    )
}
export default Home