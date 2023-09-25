import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, podemos compartir LA MISMA información entre componentes de diferente jerarquía en el arbol de componentes

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el proveedor del contexto
// El proveedor es un componente que va a envolver a todos los componentes que quieran consumir el contexto
function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({}) // cancion seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // Simulo la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
