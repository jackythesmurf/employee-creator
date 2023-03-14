import React from 'react';
import axios from 'axios';
import Employee from '../types/Employee';
import { useQuery } from 'react-query';

const DeleteEmployee = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:8080/employee/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default DeleteEmployee;