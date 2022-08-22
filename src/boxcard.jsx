import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button>go somewhere</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button >go somewhere</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={pic4} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button>go somewhere</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={pic5} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button>go somewhere</Button>
        </Card.Body>
      </Card>


    </CardGroup>
  );
}

export default GroupExample;