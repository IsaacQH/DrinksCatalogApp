
import { z } from 'zod'


// Esquema de la API de https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list. 
// Basicamente es el tipado usando zod


export const CategoriesAPIResponsableSchema = z.object  ({  //Esquema de api categories obtenidas
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})



export const SearchFilterSchema = z.object  ({  //Esquema para el state del filtro y search
    ingredient : z.string(),
    category: z.string()
})


export const DrinkAPIResponse = z.object  ({  //Esquema de api recipe obtenidas
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIResponse = z.object  ({  //Esquema de api recipes obtenidas
    drinks: z.array(DrinkAPIResponse)
})

export const RecipeAPIResponseSchema = z.object({  //Eschema de la receta con nullable porque hay ingredientes que no existen
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
  });
  