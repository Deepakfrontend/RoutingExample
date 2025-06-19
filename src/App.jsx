import React from 'react'
import Nav from "./Component/Nav";
import routes from './Routes/MyRoutes'
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
   
        <RouterProvider router={routes}/>

      
  )
}

export default App