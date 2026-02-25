import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="w-full flex justify-center  items-center container py-4
                    bg-blue-400 text-white">
        
        <div className="container flex justify-between text-lg mx-8">
           GenPharma
        </div>

        <div className="flex gap-4 text-lg font-semibold">
            Home
            <Link to='/categorias' className='hover:underline'> Categorias </Link>
            Cadastro de Categoria
        </div>



    </div>
  )
}

export default Navbar