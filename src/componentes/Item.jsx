import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";


function Item({ item }) {
  const navigate = useNavigate()
  return (
    <Col md={4} className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Precio: ${item.price}</Card.Text>
          <Button onClick={() => navigate(`/item/${item.id}`)}> Ver mas.. </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;