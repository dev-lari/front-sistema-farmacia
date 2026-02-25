import type { Categoria } from "./Categoria";

export interface Produto {
    id: number,
    nome: string,
    detalhes: string,
    preco: number,
    foto: string,
    //lógica: o produto pode ser criado com ou sem categoria
    categoria: Categoria | null; 
}