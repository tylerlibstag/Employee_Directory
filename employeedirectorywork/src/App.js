import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API"
import EmployeeTableBody from "./Components/body"
import SearchForm from "./Components/search"

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  state = {
    employees: [],
    query: "",
    results: [],
    filteredEmployees: []

  };

  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({ employees: res.data.results, filteredEmployees: res.data.results });
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  };


  render() {


    console.log('our state', this.state);


    return (

      <div>
        <h1 className="header">Employee Directory</h1>
        <input className="Search" placeholder="Enter an employee name" value={this.state.query} onChange={this.handleChange}></input>
        <div className="textbox"> <span class="order">|Profile| |First| |Last| |Age| |Number|</span>
          {
            this.state.filteredEmployees
              .map(employee => {
                return (<tr key={employee.email}>
                  <td class="td"><img src={employee.picture.thumbnail} alt="employee" /></td>
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
    console.log("query:", query)
    var filteredEmployees = this.state.employees.filter((employee) => {
      console.log("--->", employee)
      var name = employee.name.first + " " + employee.name.last
      console.log(name)
      if (name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1) {
        console.log("name", name)
        return employee
      }


    })
    console.log(filteredEmployees)
    this.setState({ filteredEmployees: filteredEmployees, query: query })

  }


  // handleChange = (event) => {
  //   var query = event.target.value

  //   var filteredEmployees = this.state.employees.filter((employee) => {

  //     var name = employee.first_name + " " + employee.last_name
  //     console.log(name,"this name")
  //     if(name.indexOf(query) !== -1)
  //     {return filteredEmployees}

  //     //return name.includes(query);
  //   })

  //   this.setState({ name: filteredEmployees })

  // }

}
export default App;
