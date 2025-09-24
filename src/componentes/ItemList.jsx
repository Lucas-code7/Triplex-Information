import Item from "./Item";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function ItemList({ items }) {
  if (!items || items.length === 0) {
    console.log(items)
    return <p>No hay productos para mostrar</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        {items.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;