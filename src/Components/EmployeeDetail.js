import React from 'react';
import "../App.css"




function EmployeeDetail({ filteredEmployees, handleOnClick }) {
    return (<div className="textbox">
        <table>
            <thead className="order">
                <tr >
                   
                    <th >Picture</th>
                    <th employee="name.first" onClick={handleOnClick}>First Name</th>
                    <th employee="name.last" onClick={handleOnClick}>Last Name</th>
                    <th employee="dob.age" onClick={handleOnClick}>Age</th>
                    <th employee="phone" onClick={handleOnClick}>Phone number</th>
                    
                    
                </tr>
            </thead>
            <tbody  filteredEmployees ={filteredEmployees}> 
                {
                   
                    filteredEmployees.map(employee => {
                            return (<tr key={employee.email}>
                                <td class="td"><img src={employee.picture.thumbnail} alt="employee" /></td>
                                <td class="td">{employee.name.first}</td>
                                <td class="td">{employee.name.last}</td>
                                <td class="td">{employee.dob.age}</td>
                                <td class="td">{employee.cell}</td>
                                <td class="td">{employee.address}</td>
                            </tr>)
                        })}

            </tbody>
        </table>
        </div>
    );
}
export default EmployeeDetail;