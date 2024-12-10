
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