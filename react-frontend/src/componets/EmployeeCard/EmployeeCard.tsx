import React from "react";
import styles from "./EmployeeCard.module.scss";
import Employee from "../../types/Employee";
import { NavLink } from "react-router-dom";
import DeleteEmployee from "../../container/DeleteEmployee";


type EmployeeCardProps = {
	employee: Employee;
	handleRemove: (id: string) => void;
};

const EmployeeCard = ({ employee, handleRemove }: EmployeeCardProps) => {
	const calculateWorkedTime = (
		startDate: string,
		finishDate: string | null
	): number => {
		const start = new Date(startDate);
		const finish = finishDate ? new Date(finishDate) : new Date();
		const diff = finish.getFullYear() - start.getFullYear();
		return diff;
	};
	
	return (
		<div className={styles.container}>
			<div className={styles.container__details}>
				<div  className={styles.container__details__name}>
					{employee.firstName} {employee.middleName}{" "}
					{employee.lastName}
				</div>
				<div  className={styles.container__details__status}>
					{employee.status} -{" "}
					{calculateWorkedTime(
						employee.startDate,
						employee.finishDate
					)}yrs
				</div>
				<div  className={styles.container__details_contacts}>{employee.email}</div>
			</div>
			<div className={styles.container__options}>
				<div>
					<NavLink className={styles.container__options__button} to={"/edit/" + employee.id}>Edit</NavLink>
				</div>
				<div>|</div>
				<div>
					<button onClick={()=>{handleRemove(employee.id)}} className={styles.container__options__button}>Remove</button>
				</div>
			</div>
			{/* <p>id: {employee.id}</p>
			<p>firstName: {employee.firstName}</p>
			<p>middleName: {employee.middleName}</p>
			<p>lastName: {employee.lastName}</p>
			<p>email: {employee.email}</p>
			<p>phoneNum: {employee.phoneNum}</p>
			<p>address: {employee.address}</p>
			<p>startDate: {employee.startDate}</p>
			<p>finishDate: {employee.finishDate}</p>
			<p>status: {employee.status}</p>
			<p>onGoing: {employee.onGoing}</p>
			<p>hoursPerWeek: {employee.hoursPerWeek}</p>
			<p>workBasis: {employee.workBasis}</p> */}
		</div>
	);
};

export default EmployeeCard;
