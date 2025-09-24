import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al traer el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No se encontró el producto</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
