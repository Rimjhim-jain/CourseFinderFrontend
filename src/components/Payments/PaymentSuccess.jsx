import React from 'react';
import {RiCheckboxCircleFill} from 'react-icons/ri';
import { Box, Container, Heading, VStack,Text, Button} from '@chakra-ui/react';
import { Link,useSearchParams } from 'react-router-dom';

export const PaymentSuccess = () => {

  const reference = useSearchParams()[0].get("reference");

  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>You have Pro Pack</Heading>
      <VStack boxShadow={"lg"} pb="16" alignItems={'center'} borderRadius="lg">
        <Box w="full" bg="green.400" p="4" css={{borderRadius: '8px 8px 0 0'}}>
          <Text color={"black"}>Payment Success</Text>
        </Box>
        <Box p="4">
          <VStack textAlign={"center"} px="8" spacing={"8"}>
              <Text>Congratulations you are a pro member.</Text>
              <Heading size={'4xl'}>
                <RiCheckboxCircleFill/>
              </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: {reference}</Heading>
      </VStack>
    </Container>
  )
}
