import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import HomeNavBar from '../HomePage/components/HomeNavBar'

const HomeLayout = () => {
  return (
    <Box>
            <HomeNavBar/>
            <Outlet/>
    </Box>  
    )
}

export default HomeLayout