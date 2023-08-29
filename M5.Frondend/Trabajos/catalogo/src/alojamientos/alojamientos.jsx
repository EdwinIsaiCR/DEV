import Card from "../componentes/card/card.jsx";
import './alojamientos.css'

const alojamientos = [
    {
        name: "Casa de fin de semana",
        portada: "https://hips.hearstapps.com/hmg-prod/images/cabana-de-madera2-1642020542.jpg",
        price: 5425,
        description: "Bonita casa de fin de semana "
    },

    {
        name: "Cabaña Romantica",
        portada: "https://images.adsttc.com/media/images/5f20/ba7e/b357/653d/3a00/0729/large_jpg/FEATURE.jpg?1595980398",
        price: 1000,
        description: "Experiencia en el Bosque"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://www.dondeir.com/wp-content/uploads/2022/06/cabanas-y-glampings-en-hidalgo-techo-de-cristal-burbujas-y-mas.jpg",
        price: 200,
        description: "Experiencia unica"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://www.dondeir.com/wp-content/uploads/2022/06/cabanas-y-glampings-en-hidalgo-techo-de-cristal-burbujas-y-mas.jpg",
        price: 200,
        description: "Experiencia unica"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://www.dondeir.com/wp-content/uploads/2022/06/cabanas-y-glampings-en-hidalgo-techo-de-cristal-burbujas-y-mas.jpg",
        price: 200,
        description: "Experiencia unica"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://www.dondeir.com/wp-content/uploads/2022/06/cabanas-y-glampings-en-hidalgo-techo-de-cristal-burbujas-y-mas.jpg",
        price: 200,
        description: "Experiencia unica"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://www.dondeir.com/wp-content/uploads/2022/06/cabanas-y-glampings-en-hidalgo-techo-de-cristal-burbujas-y-mas.jpg",
        price: 200,
        description: "Experiencia unica"
    }
]

export default function Alojamientos() {
    return (
      <>
      <div>
          <h1 className="alojamiento-title">Alojamientos</h1>
  
          <div className="container-alojamientos">
              {alojamientos.map((item, index) => (
                  <Card titulo={item.name} description={item.description} price={item.price} portada={item.portada} key={index}/>
              ))}  
          </div>
      </div>
      </>
    )
  }