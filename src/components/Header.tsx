
import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

  const {pathname} = useLocation()  //revismaos en que pagina estamos
  const isHome = useMemo(() => pathname === '/', [pathname])  //checar que sea home Cada que pathname cambie actuaize o revise

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)

  console.log(categories)
  
  useEffect( () => {
      fetchCategories()
  }, [])

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
              <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
