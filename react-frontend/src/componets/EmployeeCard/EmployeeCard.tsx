import React from "react";

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

type EmployeeCardProps = {
	employee: Employee;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
	return (
		<div>
			<p>id: {employee.id}</p>
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
			<p>workBasis: {employee.workBasis}</p>
		</div>
	);
};

export default EmployeeCard;
