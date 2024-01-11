import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher.js';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure,VStack,HStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiMenu5Fill,RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user.js';

const LinkButton = ({url="/", title="Home",onClose})=>(
    <Link to={url} onClick={onClose}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );

const Header = ({isAuthenticated=false,user}) => {
    const {isOpen,onOpen,onClose} = useDisclosure();

    const dispatch = useDispatch();

    const logoutHandler = () => {
      onClose();
      dispatch(logout());
    }

  return (
    <>
    <ColorModeSwitcher />
    <Button
        onClick={onOpen}
        colorScheme={'green'}
        width="12"
        height="12"
        rounded="full"
        zIndex={'overlay'}
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(4px)'}/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
            <DrawerBody>
                <VStack spacing={"4"} alignItems="flex-start">
    
                <LinkButton  onClose={onClose} url="/" title="Home"/>
                <LinkButton   onClose={onClose} url="/courses" title="All Courses"/>
                <LinkButton  onClose={onClose} url="/request" title="Request Course"/>
                <LinkButton  onClose={onClose} url="/contact" title="Contact Us"/>
                <LinkButton  onClose={onClose} url="/about" title="About Us"/>
                <HStack 
              justifyContent={"space-evenly"} 
              position="absolute" 
              bottom={'2rem'}
              width="80%"
              >
               {isAuthenticated ? (
               <>
               <VStack>
                <HStack>
                  <Link  onClick={onClose} to="/profile">
                    <Button variant={'ghost'} colorScheme={'green'}>Profile</Button>
                  </Link>
                  <Button variant={'ghost'} colorScheme={'green'} onClick={logoutHandler}>
                    <RiLogoutBoxLine/>
                       Logout
                    </Button>
                </HStack>

                {
                  user && user.role==="admin" && (
                    <Link  onClick={onClose} to="/admin/dashboard">
                    <Button colorScheme={"purple"} variant="ghost">
                      <RiDashboardFill style={{margin: '4px'}}/>
                      Dashboard
                    </Button>
                    </Link>
                  )
                }
               </VStack>
              </>
               ) : (
               <>
                <Link  onClick={onClose} to="/login">
                  <Button colorScheme={'green'}>Login</Button>
                </Link>
                <p>OR</p>
                <Link  onClick={onClose} to="/register">
                  <Button colorScheme={'green'}>Sign up</Button>
                </Link>
               </>
               )
               } 
              </HStack> 
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header;