import React from 'react'
import axios from 'axios'
import Employee from '../types/Employee'
import { useQuery } from 'react-query'
const EditEmployee = async (employee: Employee) => {
  const newEmployee: Employee = {
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
  axios.post('http://localhost:8080/employee', newEmployee)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

export default EditEmployee