import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"

export default function Layout() {

  const loadfromStorage = useAppStore((state) => state.loadfromStorage)

  useEffect(() => {      //Carfa cuando renderiza el layotu los favoritos
    loadfromStorage()
  }, [])

  return (
    <>
        <Header />   {/* Se queda estatico */}

        <main className="container mx-auto py-16">   {/* Aqui estar[a el contenido prioncipal de cada pagina] */}
            <Outlet/> {/* Aqui estara o lo de IndePage o lo de FavoritesPage */}
        </main>

        <Modal/>

        <Notification />
    </>
  )
}
