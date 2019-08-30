import React from "react";
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Calendar from './Calendar'

class Header extends React.Component {

    render(){
        return (
        

        

            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                        <BrowserRouter>
                            <li><Link to={"/home"} component={Home}>Home</Link></li>
                            <li><Link to={"/calendar"} component={Calendar}>Calendar</Link></li>
                            </BrowserRouter>
                        </ul>
                    </div>
                </div>
            </nav>
            
    
           
        ); 
    }
    
};

export default Header;