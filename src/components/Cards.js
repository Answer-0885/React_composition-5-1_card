import "./Cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Cards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Cards;