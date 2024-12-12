
import axios from "axios";
import { CategoriesAPIResponsableSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schemas";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array
    const result = CategoriesAPIResponsableSchema.safeParse(data)  //Guarda el resultado ya con el tipado
    if (result.success){
        return result.data  //Regresa directamente el resultado de drinks de categories
    }    
}

export async function getRecipes(filters: SearchFilter) {
    // URLs para cada filtro
    const url1 = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}`;
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}`;

    try {
        // Realizar ambas solicitudes en paralelo
        const [data1, data2] = await Promise.all([axios(url1), axios(url2)]);

        // Validar resultados con Zod
        const resultIngredient = DrinksAPIResponse.safeParse(data1.data);
        const resultCat = DrinksAPIResponse.safeParse(data2.data);

        if (resultIngredient.success && resultCat.success) {
            const ingredientDrinks = resultIngredient.data.drinks;
            const categoryDrinks = resultCat.data.drinks;

            // Crear un conjunto de IDs de la categoría
            const categoryIds = new Set(categoryDrinks.map((drink) => drink.idDrink));

            // Filtrar las bebidas del ingrediente que también estén en la categoría
            const filteredDrinks = ingredientDrinks.filter((drink) =>
                categoryIds.has(drink.idDrink)
            );

            return filteredDrinks; // Retornar los resultados filtrados (incluyen idDrink)
        } else {
            throw new Error("Validación fallida de los datos de la API.");
        }
    } catch (error) {
        console.error("Error al obtener recetas:", error);
        return []; // Retornar un array vacío en caso de error
    }
}



export async function getRecipeById(id: Drink['idDrink'] ){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])  //Guarda el resultado ya con el tipado
    if (result.success){
        return result.data  //Regresa directamenteel resultado de recipe del category
    }    
}






