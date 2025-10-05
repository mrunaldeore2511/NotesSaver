import { createBrowserRouter } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { RouterProvider } from 'react-router'
import './App.css'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
        <div>
          <Navbar/>
          <Home/>
        </div>
    },
    {
      path:"/pastes",
      element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
    },
    {
      path:"/pastes/:id",
      element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
    }
  ]
)

function App() {


  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
