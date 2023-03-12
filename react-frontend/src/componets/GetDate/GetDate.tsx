import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Employee from "../../types/Employee";
import CreateEmployee from "../../types/CreateEmployee";

import styles from "./GetDate.module.scss";

type GetDatePros = {
	register: UseFormRegister<CreateEmployee>;
	errors: FieldErrors<CreateEmployee>;
	askForStartDate: boolean;
	disable?: boolean;
};

const GetDate = ({
	register,
	errors,
	askForStartDate,
	disable,
}: GetDatePros) => {
	return (
		<div>
			<div className={styles.container__date}>
				<div className={styles.container__date__section}>
					<label>Date</label>
					<input
						disabled={disable}
						type="number"
						{...register(
							askForStartDate ? "startDay" : "finishDay",
							{
								required: {
									value: !(disable || false),
									message: "Please fill this in correctly",
								},
								min: {
									value: 1,
									message: "Min date is 1",
								},
								max: {
									value: 31,
									message: "Max date is 31",
								},
							}
						)}
						min="1"
						max="31"
					/>
					<ErrorMessage
						errors={errors}
						name={askForStartDate ? "startDay" : "finishDay"}
						as={<p className={styles.container__errors}></p>}
					/>
				</div>
				<div className={styles.container__date__section}>
					<label>Month</label>
					<select
						disabled={disable}
						{...register(
							askForStartDate ? "startMonth" : "finishMonth",
							{
								required: {
									value: !(disable || false),
									message: "Please fill this in correctly",
								},
							}
						)}
					>
						<option value="">Select Month</option>
						<option value="01">January</option>
						<option value="02">February</option>
						<option value="03">March</option>
						<option value="04">April</option>
						<option value="05">May</option>
						<option value="06">June</option>
						<option value="07">July</option>
						<option value="08">August</option>
						<option value="09">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
					<ErrorMessage
						errors={errors}
						name={askForStartDate ? "startMonth" : "finishMonth"}
						as={<p className={styles.container__errors}></p>}
					/>
				</div>

				<div className={styles.container__date__section}>
					<label htmlFor="">Year</label>
					<input
						disabled={disable}
						type="number"
						{...register(
							askForStartDate ? "startYear" : "finishYear",
							{
								required: {
									value: !(disable || false),
									message: "Please fill this in correctly",
								},
								min: {
									value: 1900,
									message: "Min year is 1900",
								},
								max: {
									value: 2099,
									message: "Max year is 2099",
								},
							}
						)}
						min="1900"
						max="2099"
					/>
					<ErrorMessage
						errors={errors}
						name={askForStartDate ? "startYear" : "finishYear"}
						as={<p className={styles.container__errors}></p>}
					/>
				</div>
			</div>
			<div
				{...register(askForStartDate ? "startDate" : "finishDate", {})}
			></div>
		</div>
	);
};

export default GetDate;
