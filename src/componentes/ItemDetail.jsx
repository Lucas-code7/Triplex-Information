import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const [cartMessage, setCartMessage] = useState("");

  const handleAdd = (cantidad) => {
    setCartMessage(`Agregaste ${cantidad} ${product.title} al carrito`);
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="div_foto">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>

        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        {cartMessage && <p>{cartMessage}</p>}
      </div>
    </div>
  );
}

export default ItemDetail;
