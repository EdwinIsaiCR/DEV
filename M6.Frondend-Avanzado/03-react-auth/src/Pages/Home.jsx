import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'

const Home = () => {
  const [itemsList, setItemsList] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsList(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error)
      }
    }
    fetchItemsData()
  }, [])
  return (
    <h1>Home</h1>
  )
}

export default Home
