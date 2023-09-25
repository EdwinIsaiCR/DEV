import { useContext } from 'react'
import { SongContext } from '../context/SongContex'

export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext debe ser usado dentro de SongProvider')
  }
  return context
}
