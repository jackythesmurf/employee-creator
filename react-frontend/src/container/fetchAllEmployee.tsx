import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchAllEmployee = () => {
  return useQuery("getAllEmployees", async () => {
    const res = await axios.get("http://localhost:8080/employee");
    return res.data;
  });
}

export default fetchAllEmployee