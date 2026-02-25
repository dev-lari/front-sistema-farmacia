import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { SyncLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../CardCategoria/CardCategoria";

function ListaCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            setIsLoading(true)

            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            ToastAlerta("Não existem categorias cadastradas", "info")
        }

        setIsLoading(false)
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])


  return (
    <>
    {isLoading &&(
        <SyncLoader
        color="#312e81"
        size={23} />
    )}
    
    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
            {(!isLoading && categorias.length === 0) && (
                <span className="text-3xl text-center my-8">
                    Nenhuma categoria foi encontrada!
                </span>
            )}

        <div className="grid grid-cols-1 md: grid-cols-2
                        lg:grid-cols-4 gap-8">
            {
                categorias.map(categoria => (
                    <CardCategoria key={categoria.id} categoria= {categoria} />
                ))
            }

        </div>
        </div>
    </div>
    </>
  )
}

export default ListaCategorias;