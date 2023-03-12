import React from 'react'
import axios from 'axios'

import { useQuery } from 'react-query'
const EditEmployee = () => {
  return useQuery("getAllEmployees", () => {
    return axios.post("http://localhost:8080/employee").then(res => res.data);
  });
}

export default EditEmployee