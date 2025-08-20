import './App.css'
import { Home, Login } from "../src/components/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])


  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </>
  )
}

export default App
