
import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import { BrowserRouter,Route,Routes } from 'react-router'

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
