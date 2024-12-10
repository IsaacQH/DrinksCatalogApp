
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

  const [searchFilters, setSearchFilters] = useState({   // Creamos el state con valores vacios, luego los seteamos con inputs
    ingredient : '',
    category: ''
  })

  const {pathname} = useLocation()  //revismaos en que pagina estamos
  const isHome = useMemo(() => pathname === '/', [pathname])  //checar que sea home Cada que pathname cambie actuaize o revise

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)
  
  useEffect( () => {
      fetchCategories()
  }, [])

  const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {  //Seteamos los valores
    setSearchFilters({                       //Uswmaos la funcion setSearchjFilter para setear el valor que estemos colocando y copiamos el estado anterior
      ...searchFilters,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {  //Funcion que maneja el submit
    e.preventDefault()   //Evita que se recargue al submitear
    
    if(Object.values(searchFilters).includes('')){        //    Revisa que no este vacio el valor, que haya algo
       return   // Para que detenga el submit
    }

    //Consultar las recetas
    searchRecipes(searchFilters)  //Se manda a llamar a la funcion desde el state global de useApp y le mandamos el parametro de filtros
  } 

  return (
    <header className={ isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>  {/* backgroun header*/}
        <div className="mx-auto container px-5 py-16"> {/* contenedor y alineacion en x*/}
            <div className="flex justify-between items-center"> {/* Division de la barra centrada y justificada*/}
                <div> {/* div del logo*/}
                    <img className="w-32" src="/logo.svg" alt="logo"/>
                </div>

                <nav className="flex gap-6"> {/* Barra de nav div*/}

                  <NavLink 
                      to="/" 
                      className={({isActive}) => 
                        isActive ? ' text-orange-500 uppercase font-bold' : ' text-white uppercase font-bold'
                      }
                  >Inicio</NavLink>
                  <NavLink 
                      to="/favorites" 
                      className={({isActive}) => 
                        isActive ? ' text-orange-500 uppercase font-bold' : ' text-white uppercase font-bold'
                      }
                  >Favoritos</NavLink>
                </nav>
            </div>

            { isHome && (
              <form 
                className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                onSubmit={handleSubmit}
                >

                <div className=" space-y-4">
                  <label 
                      htmlFor="ingredient"
                      className="block text-white uppercase font-extralight text-lg "
                  >Nombre o Ingredientes</label>

                  <input 
                      type="text"
                      id="ingredient"
                      name="ingredient"
                      className=" p-3 w-full rounded-lg focus:outline-none"
                      placeholder="Nombre o Ingredientes. Ej: Vodka, Tequila"
                      onChange={handleChange}    //cada que cambie llama a handlechange que setea los valores nuevos copaindo el apsado para tener el valor nuevo
                      value={searchFilters.ingredient} //Se le dara el valor de searchFilters
                  />
                </div>

                <div className=" space-y-4">
                  <label 
                      htmlFor="category"
                      className="block text-white uppercase font-extralight text-lg "
                  >Categoría</label>

                  <select 
                      id="category"
                      name="category"
                      className=" p-3 w-full rounded-lg focus:outline-none"
                      onChange={handleChange}
                      value={searchFilters.category}
                  > <option>-- Seleccione --</option>
                  {categories.drinks.map((category) => (
                      <option
                          value={category.strCategory}
                          key={category.strCategory}
                      >{category.strCategory}
                      </option>))}
                  </select>
                </div>

                <input type="submit" value="Buscar recetas" className=" cursor-pointer bg-slate-800 hover:bg-slate-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"/>

              </form>
            )}
        </div>
    </header>
  )
}
