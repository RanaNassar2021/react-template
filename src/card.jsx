import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import pic1 from './pic1.jpg';

function GridExample() {
  return (
    <Container>
    <Row>
      <Col >
      <Card className="col1">
        <Card.Body>
          <Card.Title><h2 className="title">This website is Awesome</h2></Card.Title>
          <Card.Text>
          This website has some subtext that goes here under the
main title. it's a smaller font and color is lower
          </Card.Text>
          <Button>Sign up</Button>
        </Card.Body>

      </Card>
        </Col>
      <Col>
      <Card className="col2 p-0 ps-sm-5">
        <Card.Img variant="top" src={pic1} className="img"  />
      </Card>
    </Col>
    </Row>
    </Container>
  
  );
}

export default GridExample;