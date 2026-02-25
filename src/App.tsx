import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import FormCategoria from './components/categoria/FormCategoria/FormCategoria';
import ListaCategorias from './components/categoria/ListaCategoria/ListaCategorias';
import DeletarCategoria from './components/categoria/DeletarCategoria/DeletarCategoria';

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
            <Route path='/cadastrarcategoria' element={<FormCategoria/>} />
            <Route path='/editarcategorias/:id' element={<FormCategoria/>} />
            <Route path='/deletarcategorias/:id' element={<DeletarCategoria/>} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
