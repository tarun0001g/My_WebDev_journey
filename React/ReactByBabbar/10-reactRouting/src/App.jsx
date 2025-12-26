
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'
import MyParaComp from './components/MyParaComp'
import NotFound from './components/NotFound'
//importing child routes
import Courses from './components/Courses'
import Reports from './components/Reports'
import PaymentHistory from './components/PaymentHistory'

// step-1 : import browser router
// step-2 : define/create routes 
// step-3 : Add router provider
// 

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
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div> 
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div> ,
      children: [ //to access child routes type: http://localhost:5173/dashboard/courses
        {
          path:'courses', //No need to add "/" before child path
          element:<Courses/>
        },
        {
          path:'reports',
          element:<Reports/>
        }, 
        {
          path:'payhistory',
          element:<PaymentHistory/>
        } ]
        //NOTE: While using child routes, always add <Outlet/> tag inside the end of parent component
    },
    {
      // useParams hook example:
      path:"/myid/:id",
      element: 
      <div>
        {/* <Navbar/> */}
        <MyParaComp/>
      </div>
    },

    {
      //If any random text/folder name comes in URL (which not actually exists) then this component will run,
      path:'*',
      element: <NotFound/>
    }

  ]
)

function App() {
 

  return (
    <div>
      

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
