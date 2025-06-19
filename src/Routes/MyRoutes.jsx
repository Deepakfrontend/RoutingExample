import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Gallery from "../Component/Gallery";
import Main from "../Component/Main";
import Noida from "../Component/Noida";
import Gurugram from "../Component/Gurugram";
import Banglore from "../Component/Banglore";
import Categoryproducts from '../Component/Categoryproduct';

const routes = createBrowserRouter([
   
    {path:'', element:<Main/>, children:[
        {path:'', element:<Home/>},
        {path:'about', element:<About/>},
        {path:'categoryproducts/:cat',element:<Categoryproducts />},
        {path:'contact', element:<Contact/>,children:[
            {path:'noida',element:<Noida/>},
            {path:'gurugram',element:<Gurugram/>},
            {path:'banglore',element:<Banglore/>}
        ]},
        {path:'gallery', element:<Gallery/>}
    ]}
])

export default routes;
