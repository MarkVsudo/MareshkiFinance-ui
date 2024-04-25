import '../../styles/AboutPage/AboutPage.css'
import { Flex, Text, Image } from "@chakra-ui/react";
import bankImage from "../../assets/home-bank-building.png";
import cardImage from "../../assets/home-card-clouds.png";

const AboutPage = () => {
  return (
    <Flex direction="column" gap="5rem" mt='7rem' mx='5rem' height='100%'>
      <Flex justifyContent={'space-between'}>
        <Flex direction="column" gap="3rem" w='50%'>
          <Text fontSize="3xl" fontWeight='700' className='about-titles'>Stop holding your money in the bank</Text>
          <Text fontSize='xl'>
            Are you tired of your money sitting idle in the bank, barely earning
        
            anything in interest? It's time to break free from the traditional
            banking
             mindset and explore better options for your hard-earned cash.
             <br/>
             <br/>
             In today's dynamic financial landscape, there are numerous avenues to make your money work harder for you. Instead of letting it languish in a low-interest savings account, consider alternative investment opportunities that offer greater potential returns.
          </Text>
        </Flex>
        <Image src={bankImage} alt="Bank image about page" className="bank-image-about"/>
      </Flex>
      <Flex justifyContent={'space-between'} minHeight='20rem'>
          <Image src={cardImage} alt="Card image about page" className="card-image-about"/>
        <Flex direction="column" gap="3rem" w='50%'>
          <Text fontSize="3xl" fontWeight='700' className='about-titles'>Stop holding your money in the bank</Text>
          <Text fontSize='xl' textAlign='justify' >
            At MARESHKI FINANCE, we understand the paramount importance of
            security when it comes to managing your finances online. That's why
            we've implemented cutting-edge measures to ensure that your money
            and personal information are always protected.
            <br/>
            <br/>
            With state-of-the-art encryption protocols, advanced authentication methods, and robust firewall systems, our online banking platform provides a fortress-like defense against cyber threats. Every transaction you make is encrypted and closely monitored to safeguard against unauthorized access and fraud.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
