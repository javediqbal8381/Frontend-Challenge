import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import AddItem from './pages/AddItem'
import Item from './pages/Item'

function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product" element={<AddItem />} />
        <Route path="products" element={<Item />} />
      </Routes>
    </div>
  )
}

export default App
