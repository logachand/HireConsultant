import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function Test() {
  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }} sm={4} className= "col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} sm={4} className="mb-3">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} sm={4} className="mb-3">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} sm={4} className="mb-3" >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} sm={4}  className="mb-3">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mb-3">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mb-3">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> 
        </Row>
      </Container>
    </div>
  );
}

export default Test;
