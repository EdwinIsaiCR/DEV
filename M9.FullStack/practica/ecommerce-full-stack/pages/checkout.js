import React from 'react'
import ShippingAddressForm from '../components/forms/Shipping'
import { useSelector, useDispatch} from 'react-redux'
import {
  Progress,
  Card,
  CarHeader,
  Heading,
  Stack,
  CardBody,
  Box
} from '@chakra-ui/react'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const activeStep = useSelector((state) => state.currentStep)

  const steps = [
    { name: 'Shipping', component: <ShippingAddressForm /> },
    { name: 'Payment', component: <div>Payment</div>},  
    { name: 'Review', component: <div>Review</div>}

  ]
  return (
    <Stack>
      <Progress>
        <Box>
          <Card>
            <CarHeader>
              {steps[activeStep].name}
            </CarHeader>
            <CardBody>
              {steps[activeStep].component}
            </CardBody>
          </Card>
        </Box>
      </Progress>
    </Stack>
  )
}

export default CheckoutPage