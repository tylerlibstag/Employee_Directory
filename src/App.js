import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API"
import EmployeeDetail from './Components/EmployeeDetail';


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
        <EmployeeDetail filteredEmployees = {this.state.filteredEmployees} handleOnClick={this.handleOnClick}/>
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
  handleOnClick = event => {
    
    let changing = event.target.getAttribute("employee");
    let items = Array.isArray(changing) ? changing : changing.split(".")
    let retrievedList = this.state.employees;
    retrievedList = retrievedList.sort((a, b) => {
      let aItem = items.reduce((before, current) => before && before[current], a);
      let bItem = items.reduce((before, current) => before && before[current], b);
      if(aItem < bItem) { return -1; }
      if(aItem > bItem) { return 1; }
      return 0;
    })
    this.setState({filteredEmployees: retrievedList});
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
