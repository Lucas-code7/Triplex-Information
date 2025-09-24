import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

  useEffect(() => {
    const url = `https://dummyjson.com/products`;
    const urlCategory = `https://dummyjson.com/products/category/${id}`;

    fetch(id ? urlCategory : url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Productos:", data.products);
        setItems(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al traer productos:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList items={items} />;
}

export default ItemListContainer;
