import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Menu from './Menu/Menu.jsx'
import Section from './Section/Section.jsx'
import Alojamientos from './alojamientos/alojamientos.jsx'
import Footer from './footer/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Section></Section>
    <Alojamientos/>
    <Footer/>
  </React.StrictMode>,
)