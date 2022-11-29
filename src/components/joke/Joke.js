import {Card, Button} from "react-bootstrap";
import './joke.scss';
import { useState } from "react";
let favoriteList =[];
const Joke=(props)=>{
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => { setIsVisible(!isVisible)};
    const handleSave = () => {
        let obj ={}
        obj["id"] = props.id;
        obj["value"] = props.value;
        obj["url"] = props.url;
        favoriteList.push(obj)
        localStorage.setItem('favoriteJokes',JSON.stringify(favoriteList))
    }
    return(
        <Card className="col-sm-5 m-4">
            <Card.Header className="bg-success p-2 text-dark bg-opacity-25">{props.value}</Card.Header>
            <Card.Body>
                <div className="my-2"><a href={props.url} target="blank">Link</a></div>
                {isVisible && <div><Button className="btn btn-dark btn-sm" onClick={() => { handleSave(); toggleVisibility(); }}>Add to My Jokes</Button></div>}
            </Card.Body>
        </Card>
    )
}
export default Joke