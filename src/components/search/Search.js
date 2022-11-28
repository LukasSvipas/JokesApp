import {Card, Form, Button} from "react-bootstrap";
import {useState} from "react";

const Search= (props)=>{
    const [term, setTerm] = useState('') //props liftinimas

    const handleChange = (e) =>{
        setTerm(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSearch(term) //liftinimas/ pakolinimas
    }

    console.log(term)
    return(
        <Card>
            <Card.Header>Joke search</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Joke about..." name="term" value={term} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary" className="my-2" on>Search</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Search