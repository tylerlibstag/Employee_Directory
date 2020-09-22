import React from 'react'
function EmployeeTableBody({ employees }) {
    console.log(employees);
    return (
        <tbody>
            { employees[0] !== undefined && employees[0].name !== undefined ? (
                employees.map(({ id, picture, name, dob, phone, email, location }) => {
                    return (
                        <tr key={id.value}>
                            <td>{id.value}</td>
                            <td><img src={picture.thumbnail} alt="picture"/></td>
                            <td>{name.first}</td>
                            <td>{name.last}</td>
                            <td>{dob.age}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>{location.country}</td>
                        </tr>
                    )
                })) : (
                    <>
                    </>
                )}
        </tbody>
    )
}
export default EmployeeTableBody