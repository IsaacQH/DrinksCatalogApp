// Store general de toda la applicacion

import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({   //Permite copiar todas las funciones de get, set, todos los argumentos
    ...createRecipesSlice(...a)   // Esto permite extraer todas las copias del createRecipeSlice
})))