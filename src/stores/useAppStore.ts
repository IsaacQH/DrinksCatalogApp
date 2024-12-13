
// Store general de toda la applicacion

import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({   //Permite copiar todas las funciones de get, set, todos los argumentos
    ...createRecipesSlice(...a),   // Esto permite extraer todas las copias del createRecipeSlice
    ...createFavoritesSlice(...a)
})))