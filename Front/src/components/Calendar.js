import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

import Home from './Home';
import Header from './Header';

class Calendar extends React.Component {
    render(){


        return (
            <div>

            

        

            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                        <BrowserRouter>
                            <li><Link to="/home" >SISISISISISISIS</Link></li>
                            <li><Link to="/calendar" >Calendar</Link></li>
                            <Route path="/home" component={Home} />
                            <Route path="/calendar" component={Header} />
                            </BrowserRouter>
                        </ul>
                    </div>
                </div>
            </nav>

            
            
            
            </div>
           
        ); 

    }
   
};

export default Calendar;