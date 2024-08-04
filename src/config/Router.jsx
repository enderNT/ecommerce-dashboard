import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import Drawer from '../Layouts/DrawerLayouts/Drawer/Drawer'
import HeroPage from '../Pages/HeroPage/HeroPage'
import OrdersPage from '../Pages/Orders/Orders'

export const ROUTER = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Drawer />,
    children: [
      {
        path: 'dashboard',
        element: <HeroPage />
      },
      {
        path: 'orders',
        element: <OrdersPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])
