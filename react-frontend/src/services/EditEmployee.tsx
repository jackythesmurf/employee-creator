import React from 'react'
import axios from 'axios'
import Employee from '../types/Employee'
import { useQuery } from 'react-query'


const AddEmployee = async (employee: Employee) => {
  const editedEmployee: Employee = {
    id: employee.id,
    firstName: employee.firstName,
    middleName: employee.middleName,
    lastName: employee.lastName,
    email: employee.email,
    phoneNum: employee.phoneNum,
    address: employee.address,
    startDate: employee.startDate,
    finishDate: employee.finishDate,
    status: employee.status,
    onGoing: employee.onGoing,
    hoursPerWeek: employee.hoursPerWeek,
    workBasis: employee.workBasis

  }
  axios.patch(`http://localhost:8080/employee/${editedEmployee.id}`, editedEmployee)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

export default AddEmployee