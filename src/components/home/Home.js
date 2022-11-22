import {useState, useEffect} from "react";

const Home = () =>{
    const [jokes, setJokes] = useState([]);
    useEffect(()=>{
        try{
            fetch("https://api.chucknorris.io/jokes/search?query=bee")
                .then(response=>response.json())
                .then(data=>setJokes(data.result))
        }catch (msg){
            console.log(msg)
        }
    },[])
    console.log(jokes)
    return(
        <div>
            <p>There will be lots of jokes</p>
        </div>
    )
}
export default Home