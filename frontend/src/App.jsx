import './App.css'
import { Home, Login ,Signup} from "../src/components/index.js"
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
    {
      path: "/signup",
      element: <Signup />,
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
