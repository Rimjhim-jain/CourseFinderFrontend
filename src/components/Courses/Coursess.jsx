import React,{ useEffect, useState } from 'react';
import { Container, Image, HStack, Stack, VStack, Heading, Input, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course.js';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile.js';
import { loadUser } from '../../redux/actions/user.js';

const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creater, description, lectureCount ,loading}) => {
  return (
    <VStack className='course' alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
      <Heading textAlign={["center", "left"]} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} size={"sm"} />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text fontWeight={'bold'} children={"Creator"} textTransform="uppercase" />
        <Text fontFamily={'body'} children={creater} textTransform="uppercase" />
      </HStack>
      <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`} textTransform="uppercase" />
      <Heading size="xs" children={`Views - ${views}`} textTransform="uppercase" />
      <Stack direction={["column", "row"]} alignItem="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'green'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'green'}
          onClick={() => addToPlaylistHandler(id)}
          isLoading = {loading}
          >Add to playlist</Button>
      </Stack>
    </VStack>
  )
}

const Coursess = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addToPlaylistHandler = async(courseId) => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  }
  const categories = [
    "Web development", "Artificial Intelligence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Development"
  ];

  const {loading,courses,error,message} = useSelector(state=>state.course);

  useEffect(() =>{
    dispatch(getAllCourses(category,keyword));

    if(error){
      toast.error(error);
      dispatch({type: 'clearError'});
    }

    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'});
    }
  },[category,keyword,dispatch,error,message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All courses" m={'8'} />
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search a course..." type={'text'} focusBorderColor='green.500' />
      <HStack overflowX={"auto"} paddingY="8">
        {
          categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          ))
        }
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={['center', 'flex-start']}
      >
        {
          courses.length > 0 ?
         courses.map((item) => (
          <Course
          key ={item._id}
          title={item.title}
          description={item.description}
          views={item.views}
          imageSrc={item.poster.url}
          id={item._id}
          creator={item.createdBy}
          lectureCount={item.numOfVideos}
          addToPlaylistHandler={addToPlaylistHandler}
          loading = {loading}
        />
          )) : <Heading mt="4"  children="Courses not found"/>
        }
      </Stack>
    </Container>
  )
}

export default Coursess