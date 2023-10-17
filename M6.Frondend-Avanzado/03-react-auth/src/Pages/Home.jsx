import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Home = () => {
  const [itemsList, setItemList] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemList(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsList && itemsList.map((product) => (
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant='top' src={product.image} alt={product.product_name} />
            <Card.Body>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home
