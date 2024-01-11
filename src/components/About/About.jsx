import { Avatar, Container, Heading, Stack, VStack ,Text, Button, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import introVideo from "../../assests/videos/intro.mp4"
import {RiSecurePaymentFill} from 'react-icons/ri';
import termsAndCondition from '../../assests/docs/termsAndCondition.js'

const Founder = () => (
    <Stack 
    direction={["column","row"]} 
    spacing={["4","16"]} 
    padding={'8'}>
        <VStack>
            <Avatar src="" boxSize={['40','48']}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}> 
            <Heading children="Rimjhim Jain" size={['md','xl']}/>
            <Text 
            textAlign={["center","left"]}
            children={`Hi, I am a full-stack developer ans Learner`}/>
        </VStack>
    </Stack>
);

const VideoPlayer = () => (
    <Box>
         <video 
         autoPlay
         muted
         loop
         controls controlsList= "nodownload nofullscreen noremoteplayback" 
         disablePictureInPicture
         disableRemotePlayback
         src={introVideo}
        ></video>
    </Box>
)

const TandC = ({termsAndCondition}) =>(
    <Box>
        <Heading 
        size={"md"} 
        children="Terms & Conditions" 
        textAlign={["center","left"]} 
        my="8" />
        <Box h="sm" p="4" overflowY={'scroll'}>
            <Text textAlign={["center","left"]}>
                {termsAndCondition}
            </Text>
            <Heading 
            my="4" 
            size={"xs"} 
            children="Refund only applicable fpor cancellation within 7 days"
            />
        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={'lg'}>
        <Heading children="About us" textAlign={['center','left']}/>
        <Founder/>
        <Stack m="8" direction={["column","row"]} alignItems="center">
        <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam commodi officia qui consequuntur pariatur excepturi minus quasi quod quidem sit..
        </Text>
        <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme='green'>
                Checkout Our Plan
            </Button>
        </Link>
        </Stack>
  
        <VideoPlayer />

        <TandC termsAndCondition={termsAndCondition}/>

        <HStack my="4" p={"4"} >
            <RiSecurePaymentFill/>
            <Heading 
            size={"xs"} 
            fontFamily="sans-serif" 
            textTransform={'uppercase'}
            children={"Payment is secured by Razorpay"}
            />
        </HStack>

    </Container>
  )
}

export default About;