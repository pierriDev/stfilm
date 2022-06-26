import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from "../screens/Home/Home" 

const Navigation = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
)

export default Navigation;
