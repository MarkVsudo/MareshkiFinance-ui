import { Image, Box, Flex, Text } from "@chakra-ui/react";
import mainImage from "../../assets/main-image.png";
import dollarImageST from "../../assets/dollar1.png";
import dollarImageND from "../../assets/dollar2.png";
import dollarImageRD from "../../assets/dollar3.png";
import "../../styles/HomePage/HomePage.css";
import HomeNavBar from "./components/HomeNavBar";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <Box>
      <HomeNavBar />
      <Flex justifyContent="space-between" w="100vw" px='5rem'>
        <Flex direction="column">
          <Text fontSize="5rem" className="main-headline">
            Digital <br /> Banking <br /> Made Easy
          </Text>
          <Text fontSize='xl' my='2rem'>Modern and secure service that allows you to manage<br/>accounts, make payments and transfers</Text>
          <Link to='/profile'><button className="home-btn" type='button'>Open an account</button></Link>
        </Flex>
        <Box position='relative'>
          <Image
            src={mainImage}
            alt="Home background image"
            className="main-image"
          />
          <Image
            src={dollarImageST}
            alt="Home aside image"
            className="aside-image-1"
          />
          <Image
            src={dollarImageND}
            alt="Home aside image"
            className="aside-image-2"
          />
          <Image
            src={dollarImageRD}
            alt="Home aside image"
            className="aside-image-3"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
