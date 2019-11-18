import React, { Component } from 'react';
import Calendar from 'react-calendar';

class AppCalendar extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className = "Calendar-container">
                <Calendar 
                    onChange={this.onChange}
                    value = {this.state.date}
                    />

                <div className="Calendar-links">
                </div>
            </div>
        );
    }
};

export default AppCalendar; 