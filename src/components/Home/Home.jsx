import React from 'react';
import {
  Stack,
  VStack,
  Text,
  Heading,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.css';
import vg from '../../assests/images/bg.png';
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di";
import introVideo from "../../assests/videos/intro.mp4"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']} //first val for small screen & second for large screen
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing="8">
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text 
            fontSize={'2xl'}
            fontFamily="cursive"
            textAlign={["center","left"]} children="Find valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="green">
                Explore
              </Button>
            </Link>
          </VStack>

          <Image className='vector-graphics' boxSize={'md'} src={vg} />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'green.400'}
          children="OUR BRANDS"
        />

        <HStack className='brandsBanner'>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
      </Box>

      <div className="container2">
        <video autoPlay
         controls controlsList= "nodownload nofullscreen noremoteplayback" 
         disablePictureInPicture
         disableRemotePlayback
         src={introVideo}
        ></video>
      </div>

    </section>
  );
};

export default Home;
