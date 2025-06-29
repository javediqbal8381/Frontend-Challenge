import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import AddItem from './pages/AddItem'
import Item from './pages/Item'
import Footer from './components/Footer'
import { Toaster } from 'sonner'


function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="add-item" element={<AddItem />} />
        <Route path="products" element={<Item />} />
      </Routes>
      <Footer/>
       <Toaster />
    </div>
  )
}

export default App
