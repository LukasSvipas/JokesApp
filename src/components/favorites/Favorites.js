import Joke from "../joke/Joke";
import {Row} from "react-bootstrap";
import {useEffect, useState} from "react";

const Favorites =()=>{
    const [jokesList,setJokesList] = useState([])
    const data = JSON.parse(window.localStorage.getItem('favoriteJokes'))

    useEffect(()=>{
        if(data.length){
            setJokesList(state =>([...state,...data]))
        }
    }, [data])
    return(
        <>
        {jokesList &&
        <div>
            <h2>My Jokes</h2>
            <Row>
                {data?.map(data => <Joke
                    id={data.id}
                    value={data.value}
                    url={data.url}
                />)}
            </Row>
        </div>
        }
        </>
    )
}
export default Favorites