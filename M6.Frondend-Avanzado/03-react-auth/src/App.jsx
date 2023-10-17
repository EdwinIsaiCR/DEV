import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/Components/Header'
import RoutesIndex from './routes/RoutesIndex'
import { AuthProvider } from '@/Context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
