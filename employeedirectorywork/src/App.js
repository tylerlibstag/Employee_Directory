import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './tempdata.js'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: data
  };


  helper = (event) => {

    var filteredEmps = []

    var userL = event.target.value
    for (var i = 0; i < this.state.employees.length; i++) {
      var name = this.state.employees[i].name.first
      name.substr(0, 1)
     console.log(name.substr(0, 1))
      console.log(userL)
      console.log(filteredEmps, "this is the array")
      if (userL === name.substr(0, 1)) {
       filteredEmps.push(name.substr(0,1))
      }
      
    }


  }

  render() {


    console.log('our state', this.state);


    return (

      <div>
        <h1 className="header">Employee Directory</h1>
        <input onChange={this.helper}></input>
        <div className="textbox">
          {this.state.employees.map(employee => {
            console.log('single', employee.email)
            return (
              <div>
                <h1 className="employee"> {employee.name.first} </h1>
              </div>
            )
          })
          }
        </div>

      </div>
    );
  }
}

export default App;
