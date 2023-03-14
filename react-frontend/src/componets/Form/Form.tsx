import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { DevTool } from "@hookform/devtools";
import styles from "./Form.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import GetDate from "../GetDate/GetDate";

import GetInput from "../GetInput/GetInput";
import GetOptions from "../GetOptions/GetOptions";

import AddEmployee from "../../container/AddEmployee";
import Employee from "../../types/Employee";
import CreateEmployee from "../../types/CreateEmployee";
import { NavLink, useParams } from "react-router-dom";
import GetEmployee from "../../container/GetEmployee";
import { UseQueryResult } from "react-query";
import EditEmployee from "../../container/EditEmployee"
type FromProps = {
	editEmployee: CreateEmployee | undefined;
};

const EmployeeForm = ({ editEmployee }: FromProps) => {
	const {
		register,
		watch,
		handleSubmit,
		setError,
		setValue,
		control,
		formState: { errors },
	} = useForm<CreateEmployee>({
		// Set defaultValues to undefined if id is not present
		defaultValues: editEmployee as CreateEmployee,
	});
	const onSubmit = (employeeData: CreateEmployee) => {
		if (editEmployee) {
			EditEmployee(employeeData)
		} else {
			AddEmployee(employeeData);
		}
	};
	const handleDatesUponSubmit = () => {
		const formateStartDate = () => {
			const date = watch("startDay");
			const month = watch("startMonth");
			const year = watch("startYear");
			const formattedDate = new Date(`${year}-${month}-${date}`)
				.toISOString()
				.slice(0, 10);
			return formattedDate;
		};
		const formateFinishDate = () => {
			const date = watch("finishDay");
			const month = watch("finishMonth");
			const year = watch("finishYear");
			return watch("onGoing")
				? null
				: `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;
		};
		setValue("startDate", formateStartDate(), {
			shouldDirty: true,
			shouldTouch: true,
		});
		setValue("finishDate", formateFinishDate(), {
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	return (
		<>
			<DevTool control={control} />{" "}
			{
				<form
					className={styles.container}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 className={styles.container__heading}>
						Personal Information
					</h1>

					<label className={styles.container__fieldName}>
						First Name
					</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"firstName"}
						placeHolder={"Jacky"}
					/>

					<label className={styles.container__fieldName}>
						Middle Name
					</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"middleName"}
						placeHolder={"Zicheng"}
					/>

					<label className={styles.container__fieldName}>
						Last Name
					</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"lastName"}
						placeHolder={"Li"}
					/>

					<h1 className={styles.container__heading}>
						Contact Details
					</h1>
					<label className={styles.container__fieldName}>Email</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"email"}
						placeHolder={"email"}
						optionalPattern={{
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Must be an email",
							},
						}}
					/>

					<label className={styles.container__fieldName}>
						Mobile Number
						<br />
						<span className={styles.container__hints}>
							Must be an Australian Number
						</span>
					</label>

					<GetInput
						register={register}
						errors={errors}
						inputField={"phoneNum"}
						placeHolder={"0412345678"}
						optionalPattern={{
							pattern: {
								value: /^((\+?61)|0)[2-478](\s?\d{4}){2}$/i, // need to change regrex
								message: "Must be an Australia Phone Number",
							},
						}}
					/>
					<label className={styles.container__fieldName}>
						Residental Address
						<br />
						<span className={styles.container__hints}>
							Must be an Australian Address
						</span>
					</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"address"}
						placeHolder={"123 Example St"}
					/>

					<h1 className={styles.container__heading}>
						Employment Status
					</h1>
					<label className={styles.container__fieldName}>
						What is contract type
					</label>
					<GetOptions
						register={register}
						errors={errors}
						inputField={"status"}
						placeHolder={["Permanent", "Contract"]}
					/>

					<label className={styles.container__fieldName}>
						Start Date
					</label>
					{/* ********* */}
					<GetDate
						register={register}
						errors={errors}
						askForStartDate={true}
					/>
					{/* ********* */}
					<label className={styles.container__fieldName}>
						Finish Date
					</label>
					{/* ********* */}
					<GetDate
						register={register}
						errors={errors}
						askForStartDate={false}
						disable={watch("onGoing")}
					/>
					{/* ********* */}

					<input
						className={styles.container__checkBox}
						type="checkbox"
						{...register("onGoing", {})}
					/>
					<label className={styles.container__fieldName}>
						On Going
					</label>

					<p className={styles.container__fieldName}>
						Is this on a full-time or part-time basis?
					</p>
					<GetOptions
						register={register}
						errors={errors}
						inputField={"workBasis"}
						placeHolder={["Full-time", "Part-time"]}
					/>
					{/* ******************** */}
					<div className={styles.container__hoursInputBox}>
						<label className={styles.container__fieldName}>
							Hours per week
						</label>
						<input
							min={0}
							className={styles.container__hoursInputBox__input}
							type="number"
							{...register("hoursPerWeek", {
								required: {
									value: true,
									message: "Required Field",
								},
								min: {
									value: 0,
									message: "Min value is 0",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="hoursPerWeek"
							as={<p className={styles.container__errors}></p>}
						/>
					</div>
					<div className={styles.container__finalButtons}>
						<input
							className={styles.container__finalButtons__submit}
							type="submit"
							value="Save"
							onClick={handleDatesUponSubmit}
						/>
						<button
							className={styles.container__finalButtons__cancel}
						>
							<NavLink
								className={
									styles.container__finalButtons__cancel__link
								}
								to="/"
							>
								Cancel
							</NavLink>
						</button>
					</div>
				</form>
			}
		</>
	);
};

export default EmployeeForm;
