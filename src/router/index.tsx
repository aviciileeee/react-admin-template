import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import NotFound from '@/views/404'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />
  },
  {
    path: '/404',
    element: <NotFound />
  }
]

export default createBrowserRouter(routes)!
