import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import About from "../screens/About/About" 
import Home from "../screens/Home/Home" 
import Information from "../screens/Information/Information" 
import Products from "../screens/Products/Products" 
import SpecificationScreen from "../screens/SpecificationScreen/SpecificationScreen" 

//CRIAR PAGIMA DE LEGISLACAO

const Navigation = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/empresa' element={<About/>} />
            <Route path='/como-comprar' element={<Information/>} />
            <Route path='/produtos' element={<Products/>} />
            <Route path='/especificacao' element={<SpecificationScreen/>} />
        </Routes>
    </Router>
)

export default Navigation;
