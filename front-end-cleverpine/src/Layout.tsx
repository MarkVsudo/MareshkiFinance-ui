import { Box } from '@chakra-ui/react'
import React from 'react'
import DashboardPage from './pages/DashboardPage/DashboardPage'
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
