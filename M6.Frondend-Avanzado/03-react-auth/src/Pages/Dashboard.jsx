import { useState, useEffect } from 'react'
import { getMeUserService } from '@/services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error)
      }
    }
    fetchUserData()
  }, [])
  return (
    <>
      <h1>Dashboard</h1>
      {
      userData?.first_name && <p>{userData.first_name}</p>
      }
      {
      userData?.last_name && <p>{userData.last_name}</p>
      }
      {
      userData?.first_name && <p>{userData.last_name}</p>
      }
    </>
  )
}

export default Dashboard
