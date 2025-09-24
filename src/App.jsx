import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar categories={["smartphones", "laptops"]} />
      <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/Triplex-Information" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>

    </BrowserRouter>
  );
}

export default App;
