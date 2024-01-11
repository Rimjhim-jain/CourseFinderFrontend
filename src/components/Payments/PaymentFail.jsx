import React from 'react'
import {RiErrorWarningFill} from 'react-icons/ri';
import { Container, Heading, VStack, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh" p="16">
    <VStack justifyContent={'center'} h="full" spacing={'4'}>
      <RiErrorWarningFill size={'5rem'}/>
      <Heading textTransform={"uppercase"}>Payment Fail</Heading>
      <Link to="/subscribe">
        <Button variant={'ghost'}>Try Again</Button>
      </Link>
    </VStack>
  </Container> 
  )
} 

export default PaymentFail;