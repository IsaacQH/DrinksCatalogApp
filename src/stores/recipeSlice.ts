//Store usando Slice que albergara las recetas

import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"

type Category = []

export type RecipesSliceType = {
    categories:Category[],
    fetchCategories: () => Promise<void>  //Promesa para obetner el objeto de la API
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fetchCategories: async()=> {
        getCategories()        //Llama a la API desde el servicio en getCategories
    }
})