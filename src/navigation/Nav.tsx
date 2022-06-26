import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from "../screens/Home/Home" 
import About from "../screens/About/About" 

const Navigation = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/empresa' element={<About/>} />
        </Routes>
    </Router>
)

export default Navigation;
