import React from "react";
import Card from 'react-bootstrap/Card';

function Testimonial() {
  return (

      <Card className="s3">
        <Card.Body>

          <Card.Text className="testimonial-text">
        <em>
          This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All i know is that it looks nice.
          </em> <br />
           <b>  Thor,God of Thunder </b>
          </Card.Text>
        </Card.Body>
      </Card>
     
  );
}

export default Testimonial;