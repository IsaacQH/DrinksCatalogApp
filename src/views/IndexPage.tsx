
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

 const drinks = useAppStore((state) => state.drinks) //Extraemos drinks

 const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]) //Revisa cada que drkins cambia que sea mayor a 0 y regresa un true

  return (
    <>
      <h1 className="text-6xl font-extrabold ">Recetas</h1> 

      { hasDrinks ? (
        <>
          {drinks.drinks.map((drink) => (
            <DrinkCard           //mapea en cada drink que haya usando el drink card
              key={drink.idDrink}     //El id sera el key
              drink={drink}      //pasamos el promp de drink en cada iteracion con el valor drink
            />   
          ))}
        </>
      ) : (
          <p className="my-10 text-center text-2xl">Realiza una búsqueda para revisar las recetas</p>
      ) }
      
    </>
  )
}
