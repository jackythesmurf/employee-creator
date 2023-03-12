import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./HomePage.module.scss";
import fetchAllEmployee from "../../container/fetchAllEmployee";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Employee {
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
}

const HomePage = () => {
	const [employeeList, setEmployeeList] = useState([]);
	const { isLoading, error, data } = fetchAllEmployee();

	return (
		<div>
			{error ? (
				"error"
			) : isLoading ? (
				"isLoading"
			) : (
				<div className={styles.container}>
					<div className={styles.container__heading}>
						Employee's List
					</div>
					<div className={styles.container__body}>
						<div className={styles.container__body__addEmployee}>
							<div
								className={
									styles.container__body__addEmployee__prompt
								}
							>
								Please click on "Edit" to find more details of
								each employee
							</div>
							<NavLink to="/edit">
								<button
									className={
										styles.container__body__addEmployee__button
									}
								>
									Add Employee
								</button>
							</NavLink>
						</div>
						<div>
							{data.map((employee: Employee) => {
								return (
									<div
										className={
											styles.container__body__employee
										}
									>
										<EmployeeCard employee={employee} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
