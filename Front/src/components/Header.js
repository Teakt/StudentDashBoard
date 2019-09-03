import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Calendar from './Calendar'

class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            first: null ,
            second: null, 
            result: null
        };
        
    }

    


    componentDidMount(){}
    render(){
        const { first , second ,result } = this.state; 

        return (

            
            <div>
            <input>


            </input>
            <button>
                onCLick={() => this.button}
            </button>
            
        

            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                        <BrowserRouter>
                            <li><Link to="/home" >SISISISISISISIS</Link></li>
                            <li><Link to="/calendar" >Calendar</Link></li>
                            <Route path="/home" component={Home} />
                            <Route path="/calendar" component={Calendar} />
                            </BrowserRouter>
                        </ul>
                    </div>
                </div>
            </nav>

            
            
            
            </div>
           
        ); 

    }
   
};

export default Header;