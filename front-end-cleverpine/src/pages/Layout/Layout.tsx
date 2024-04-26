import { Box } from '@chakra-ui/react'
import DashboardPage from '../DashboardPage/NavBar/NavbarCombined'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box>
        <DashboardPage>
            <Outlet/>
        </DashboardPage>
    </Box>
  )
}

export default Layout;
