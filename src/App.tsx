import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ListaCategorias from './components/categoria/ListaCategoria/ListaCategorias';
import FormCategoria from './components/categoria/FormCategoria/FormCategoria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListaCategorias/>} />
            <Route path='/cadastrarcategorias' element={<FormCategoria/>} />
            <Route path='/editarcategorias' element={<FormCategoria/>} />
            <Route path='/deletarcategorias' element={<FormCategoria/>} />

          </Routes>
        
      
      
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
