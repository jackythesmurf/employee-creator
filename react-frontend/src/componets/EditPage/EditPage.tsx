import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import Form from '../Form/Form';

type Employee = {
	id: number;
	firstName: string;
	middleName: string | null;
	lastName: string;
	email: string;
	phoneNum: string;
	address: string;
	startDate: string;
	finishDate: string;
	status: string;
	onGoing: boolean;
	hoursPerWeek: number;
	workBasis: string;
};




const EditPage = () => {
  const {id} = useParams()
  return (
    <div>
      <div>
        <NavLink to="../">
          {"< Back"}
        </NavLink>
        <div>Employee Details</div>
      </div>
      <Form/>

      

    </div>
  )
}

export default EditPage