import { useState } from "react";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div>
      <div className="botones-count">
        <button onClick={handleDecrease} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease} disabled={count === stock}>+</button>
      </div>
      <button className="btn-agregar" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;

