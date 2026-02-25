import type { Produto } from "./Produto";

export interface Categoria {
    id: number,
    descricao: string,
    // lógica: tem produto? se tiver, puxa a lista dos produtos ou se não tiver, fica nulo
    produto?: Produto[] | null;
}