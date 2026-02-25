import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ListaCategorias from './components/categoria/ListaCategoria/ListaCategorias';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Home />
        
          <Routes>

            <Route path='/categorias' element={<ListaCategorias/>} />

          </Routes>
        
      
      
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
