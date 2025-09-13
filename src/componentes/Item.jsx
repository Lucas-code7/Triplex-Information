import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col md={4} className="mb-4">
      <Card style={{ width: '18rem' }}>
        {item.image && (
          <Card.Img variant="top" src={item.image} alt={item.name} />
        )}
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Categoría: {item.category}
          </Card.Subtitle>
          <Card.Text>
            Precio: ${item.price}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`/item/${item.id}`)}
          >
            Ver Detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;