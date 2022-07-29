import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(param: {
  name: string;
  src: string;
  family: string;
  balance: number;
  wallet: number;
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={param.src} />
      <Card.Body>
        <Card.Title>
          {param.name} {param.family}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
