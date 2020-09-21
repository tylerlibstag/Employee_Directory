import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './tempdata.js'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: data,
    query: "",
    results: []
  };
   
  handleChange = (event) => {
    var query = event.target.value
    
    var filteredEmployees = this.state.employees.filter((employee) => {

      var name = employee.first_name + " " + employee.last_name
      return name.includes(query);
    },
    this.setState({ results: filteredEmployees })
     
  };


  // componentDidMount() {
  //   this.searchEmployee();
  // };

  // searchEmployee = () => {
  //   data.search()
  //     .then(res => {
  //       this.setState({ results: res.data.results })
  //       console.log(this.state.results)
  //     })
  //     .catch(err => console.log(err));
  // };




  // var filteredEmps = []

  // let query = event.target.value
  // this.setState({ query: query })

  // for (var i = 0; i < this.state.employees.length; i++) {
  //   var name = this.state.employees[i].name.first
  //   name.substr(0, 1)
  //   if (this.state.query === name.substr(0, 1)) {
  //     filteredEmps.push(name.substr(0, 1))
  //   }


  //   event.data.sort(filteredEmps[x]).filter(res => {
  //     const employeeName = `${data.name.first} ${data.name.last}`
  //     console.log(employeeName, "this empName")
  //     for (var x = 0; x < filteredEmps.length; x++) {
  //       if (filteredEmps[x].toLowerCase().includes(query.toLowerCase())) {
  //         return res
  //       }
  //       else if (!query) {
  //         return res
  //       }
  //     }
  //   }
  











  // handleInputChange = value => {
  //   this.setState({ query: value })
  // };

  render() {


    console.log('our state', this.state);


    return (

      <div>
        <h1 className="header">Employee Directory</h1>
        <input onChange={this.handleChange}></input>
        <div className="textbox">
          {this.state.employees.map(employee => {
            console.log('single', employee.email)
            return (

              <div>

                <h1 className="employee"> {employee.name.first}
                  {this.state.results}</h1>
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
