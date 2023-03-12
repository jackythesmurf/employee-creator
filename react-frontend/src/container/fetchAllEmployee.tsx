import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchAllEmployee = () => {
  return useQuery("getAllEmployees", () => {
    return axios.get("http://localhost:8080/employee").then(res => res.data);
  });
}

export default fetchAllEmployee