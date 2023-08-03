import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

export const Contact = () => {
  return (
    <div>

      {/* <h2>this is me</h2> */}
    
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>Put Your Imformation</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <form action="">
     l <label>Enter your First Name:
        <input type="text" />
      </label>
      <label>Enter your Last Name:
        <input type="text" />
      </label>
      <label>Enter your Email:
        <input type="text" />
      </label>
      <label>Enter your Phone Numebr:
        <input type="text" />
      </label>
      <br />
      <button type="submit">Submit</button>
      </form>
      {/* <ListGroup className="list-group-flush"> */}
        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      {/* </ListGroup> */}
      <Card.Body>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
      
      {/* <form>
      <label>Enter your name:
        <input type="text" />
      </label>
      <br />
      <br />
      <label>Enter your email:
        <input type="text" />
      </label>
      <br />
      <br />
       <button type="submit">Submit</button>
      </form> */}

      {/* <h3>this is contact</h3> */}
    </div>
  )
}



