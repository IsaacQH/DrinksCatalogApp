//Store usando Slice que albergara las recetas

import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories } from "../types"

export type RecipesSliceType = {
    categories:Categories,
    fetchCategories: () => Promise<void>  //Promesa para obetner el objeto de la API
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    fetchCategories: async()=> {
        const categories = await getCategories()        //Llama a la API desde el servicio en getCategories
        set({
            categories})    //Setea el valor de la API o fetch en el state global
    }
})