import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="w-full flex justify-center  items-center container py-4
                    bg-blue-400 text-white">
        
        <div className="container flex justify-between text-lg mx-8">
           <Link to='/'> LariFarma </Link>
        </div>

        <div className="flex gap-4 text-lg font-semibold">
            <Link to='/' className="hover:underline"> Home </Link>
            <Link to='/categorias' className='hover:underline'> Categorias </Link>
            <Link to='/cadastrarcategoria' className="hover:underline"> Cadastrar Categoria </Link>
        </div>



    </div>
  )
}

export default Navbar