import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Username from '../components/Username';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  
  const route = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Home /> </>
    },
    {
      path: "/about",
      element: <> <Navbar/> <About /> </>
    },
    {
      path: "/contact",
      element: <> <Navbar/> <Contact /> </>
    },
    {
      path: '/user/:myname',
      element: <> <Navbar/> <Username /> </>
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
