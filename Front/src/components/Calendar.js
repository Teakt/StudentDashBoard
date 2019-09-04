import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

import Home from './Home';
import Header from './Header';



import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "./CalendarStyles.css";


const styles = {
    left: {
      float: "left",
      width: "220px"
    },
    main: {
      marginLeft: "220px"
    }
  };


class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          viewType: "Week",
          headerHeight: 30,
          hourWidth: 60,
          cellHeight: 30,
          durationBarVisible: false
        };
      }

    


    componentDidMount(){}
    render(){
        const { first , second ,result } = this.state; 


        var {...config} = this.state;

        return (

            
            <div>
            <input>


            </input>
            <button>
                onCLick={() => this.button}
            </button>
            
        

            

            

            <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            cellWidth={30}
            cellHeight={30}
            dayHeaderHeight={30}
            titleHeight={30}
            showMonths={3}
            skipMonths={3}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>

            
            
            </div>
           
        ); 

    }
   
};

export default Calendar;