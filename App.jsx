
import './App.css'
import BlogPage from './Blogpage'
import HomePage from './HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
{path:'/blog',element:<BlogPage/>},
{path:'/',element:<HomePage/>}
])
function App() {


  return <RouterProvider router={router} />
}

export default App
