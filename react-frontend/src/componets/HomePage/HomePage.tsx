import React, { useEffect } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./HomePage.module.scss";
import fetchAllEmployee from "../../container/fetchAllEmployee";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Employee from "../../types/Employee";

type HomePageProps = {
	employeeList: Employee[]
}

const HomePage = ({employeeList}: HomePageProps) => {
	const { isLoading, error, data } = fetchAllEmployee();

	return (
		<div>
			{error ? (
				"error"
			) : isLoading || typeof employeeList === 'object' && !Array.isArray(employeeList) ? (
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
							
							{
							employeeList ? (
								employeeList.map((employee: Employee) => (
									<div
										className={
											styles.container__body__employee
										}
									>
										<EmployeeCard employee={employee} />
									</div>
								))
							) : (
								<h1>LOADING</h1>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
