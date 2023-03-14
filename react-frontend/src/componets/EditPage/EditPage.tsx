import React from "react";
import { useParams, NavLink } from "react-router-dom";
import CreateEmployee from "../../types/CreateEmployee";
import Employee from "../../types/Employee";
import Form from "../Form/Form";
import styles from "./EditPage.module.scss";

type EditPageProps = {
	employeeList?: Employee[];
};

function appendDates(data: Employee): CreateEmployee {
	const startDate = new Date(data.startDate);
	const finishDate = data.finishDate ? new Date(data.finishDate) : new Date();

	const startDay = startDate.getDate().toString().padStart(2, "0");
	const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
	const startYear = startDate.getFullYear().toString();

	const finishDay = finishDate.getDate().toString().padStart(2, "0");
	const finishMonth = (finishDate.getMonth() + 1).toString().padStart(2, "0");
	const finishYear = finishDate.getFullYear().toString();

	return {
		...data,
		startDay,
		startMonth,
		startYear,
		finishDay,
		finishMonth,
		finishYear,
	};
}
const EditPage = ({ employeeList }: EditPageProps) => {
	const { id } = useParams();
	const GetEmployee = () => {
		if (employeeList) {
			return employeeList.find((employee) => employee.id == id);
		}
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.container__navlink}>
					<NavLink to="/">{"< Back"}</NavLink>
				</div>
				<div className={styles.container__title}>Employee Details</div>
			</div>
			{ (employeeList && employeeList.length > 0) || !id ? (
				<Form
					editEmployee={
						id ? appendDates(GetEmployee() as Employee) : undefined
					}
				/>
			) : null}
		</div>
	);
};

export default EditPage;
