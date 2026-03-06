import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Paths } from './paths'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { ConfigProvider, theme } from 'antd'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Employees</h1>
  },
  {
    path: Paths.login,
    element: <Login/>
  },
  {
    path: Paths.register,
    element: <Register/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
