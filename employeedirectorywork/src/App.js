import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API"

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
    

  state = {
    employees: [],
    query: "",
    results: []

  };

  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({ employees: res.data.results, filteredEmployees: res.data.results });
        console.log(this.state.employees);
      })
      .catch(err => console.log(err));
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

  // if (this.state.query === name.substr(0, 1)) {
  //   filteredEmployees.push(name)
  // }
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
          {this.state.employees.filter((employee) => {
            var name = employee.first_name + " " + employee.last_name
            if (this.state.query) {
              return name
            }
            else {
              return true
            }
          })
            .map(employee => {
              return (<tr key={employee.email}> 
                  <td class="td"><img src={employee.picture.thumbnail} alt="employee"/></td>
                  <td class="td">{employee.name.first}</td>
                  <td class="td">{employee.name.last}</td>
                  <td class="td">{employee.dob.age}</td>
                  <td class="td">{employee.cell}</td>
                  <td class="td">{employee.address}</td>
              </tr>)
          })}
          
        </div>

      </div>
    );
  }
  handleChange = (event) => {
    var query = event.target.value

    var filteredEmployees = this.state.employees.filter((employee) => {
      var name = employee.first_name + " " + employee.last_name
      if (query === name.substr(0, 1)) {
            filteredEmployees.push(name.substr(0, 1))
          }
      console.log(filteredEmployees, "hey")
      return name.includes(query);
    })
    
    this.setState({ results: filteredEmployees })

  }

}
export default App;
