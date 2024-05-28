import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Login from '@/views/login/index'
import Dashboard from '@/views/dashboard'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Layout from '@/layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/welcome'} />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
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
