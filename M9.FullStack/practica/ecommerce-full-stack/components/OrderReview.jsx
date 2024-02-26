import React, { useContext } from 'react'
import {
    Heading,
    Box,
    Stack,
    StackDivider,
    Text,
    Flex,
    Button,
    Toast,
    CircularProgress
} from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'
import { useSelector } from 'react-redux'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

export const OrderReview = () => {
     // get cart context 
     const {cart} = useContext(CartContext)
     // get checout details
     const state = useSelector((state) => state)

    // operaciones para calcular el total de las compra (impuestos, precio de cada item, preciotal de los items )
     const shippingPrice = itemsPrice > 200 ? 0 : 15
     const taxPrice = itemsPrice * 0.14
     const itemsPrice = cart.reduce((acc , item) => acc + item.price, 0)
     const totalPrice = shippingPrice + taxPrice + itemsPrice

     const [displayPaypalBtns, setDisplayBtns] = useState(false)
     const [{isPending}, paypalDispatch] = usePayPalScriptReducer()
     const [isPaid, setIsPaid] = useState(false)
     const [error, setError] = useState(null)


     const handlePlaceOrder = () =>{
        setDisplayBtns(true)
     }

     const createOrder = (data,actions) => {
        return actions.order.create ({
            purchase_units: [{
                amount:{
                    value: totalPrice
                }
            }]
        }).then((orderId) =>{
            return orderId
        })

     }

     const onApprove = (data, actions) =>{
        return actions.order.capture().then((details) =>{
            console.log(details);
            setIsPaid(true)
            Toast({
                title: 'Payment Successful',
                description: 'Thank you for your order',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })
     }

     const onError = (err) =>{
        setError(err)
        Toast({
            title: 'Payment Failed',
            description: {err},
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
     }

    return (
        <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform={'uppercase'} >Shipping Address</Heading>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.fullName}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.address}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.city} {state.shippingAddress.postalCode}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.country}</Text>
                </Box>

                <Box>
                    <Heading size='xs' textTransform={'uppercase'}>Payment Method</Heading>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.paymentMethod ? state.shippingAddress.paymentMethod : 'PayPal'}</Text>
                </Box>

                <Box>
                    <Heading size='xs' textTransform={'uppercase'}>Order Summary</Heading>
                    <Text pt='2' fontSize='sm'>Items: ${itemsPrice}</Text>
                    <Text pt='2' fontSize='sm'>Shipping: ${shippingPrice}</Text>
                    <Text pt='2' fontSize='sm'>Tax: ${taxPrice}</Text>
                    <Text pt='2' fontSize='sm'>Total:  ${totalPrice}</Text>
                </Box>

                <Flex justify='center' align='center' pt='4'>
                    {
                        displayPaypalBtns ? ( isPending?<CircularProgress isIndeterminate color="blue.500" /> :
                        <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />) :
                        (<Button colorScheme='yellow' size={'sm'})
                    }
                </Flex>

        </Stack>
    )
}

export default OrderReview