import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { useRef } from "react";
import { DevTool } from "@hookform/devtools";
import styles from "./Form.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import GetDate from "../GetDate/GetDate";

import GetInput from "../GetInput/GetInput";
import GetOptions from "../GetOptions/GetOptions";

import EditEmployee from "../../container/EditEmployee";
import Employee from "../../types/Employee";
import CreateEmployee from "../../types/CreateEmployee";


// pre fill test
// const createEmployee: CreateEmployee = {
//     firstName: "John",
//     middleName: null,
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     phoneNum: "123-456-7890",
//     address: "123 Main St, Anytown, USA",
//     startDay: "01",
//     startMonth: "01",
//     startYear: "2022",
//     finishDay: "31",
//     finishMonth: "12",
//     finishYear: "2022",
//     status: "permanent",
//     onGoing: false,
//     hoursPerWeek: 40,
//     workBasis: "full-time"
//   };

const EmployeeForm = () => {
	const {
		register,
		watch,
		handleSubmit,
		setError,
		setValue,
		control,
		formState: { errors },
	} = useForm<CreateEmployee>({
		// you can prefill a form using this ->
		// defaultValues: createEmployee
	});
	const onSubmit = (employeeData: CreateEmployee) => {
		EditEmployee(employeeData);
	};
	const handleDatesUponSubmit = () => {
		const formateStartDate = () => {
			const date = watch("startDay");
			const month = watch("startMonth");
			const year = watch("startYear");
			const formattedDate = new Date(`${year}-${month}-${date}`).toISOString().slice(0,10);
			return formattedDate;
		  };
		  const formateFinishDate = () => {
			const date = watch("finishDay");
			const month = watch("finishMonth");
			const year = watch("finishYear");
			return watch("onGoing") ? null : `${year}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`;
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
					<h1>Personal Information</h1>

					<label>First Name</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"firstName"}
						placeHolder={"Jacky"}
					/>

					<label>Middle Name</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"middleName"}
						placeHolder={"Zicheng"}
					/>

					<label>Last Name</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"lastName"}
						placeHolder={"Li"}
					/>

					<h1>Contact Details</h1>
					<label>Email</label>
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

					<label>Phone Number</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"phoneNum"}
						placeHolder={"Australian Phone Number Only"}
						optionalPattern={{
							pattern: {
								value: /^((\+?61)|0)[2-478](\s?\d{4}){2}$/i, // need to change regrex
								message: "Must be an Australia Phone Number",
							},
						}}
					/>
					<label>Address</label>
					<GetInput
						register={register}
						errors={errors}
						inputField={"address"}
						placeHolder={"address"}
					/>

					<h1>Employment Status</h1>
					<label>What is contract type</label>
					<GetOptions
						register={register}
						errors={errors}
						inputField={"status"}
						placeHolder={["permanent", "contract"]}
					/>

					<label>Start Date</label>
					{/* ********* */}
					<GetDate
						register={register}
						errors={errors}
						askForStartDate={true}
					/>
					{/* ********* */}
					<label>Finish Date</label>
					{/* ********* */}
					<GetDate
						register={register}
						errors={errors}
						askForStartDate={false}
						disable={watch("onGoing")}
					/>
					{/* ********* */}
					<label>On Going</label>
					<input type="checkbox" {...register("onGoing", {})} />

					<label>Is this on a full-time or part-time basis?</label>
					<GetOptions
						register={register}
						errors={errors}
						inputField={"workBasis"}
						placeHolder={["full-time", "part-time"]}
					/>
					<input
						type="number"
						{...register("hoursPerWeek", { required: true })}
					/>

					<input type="submit" onClick={handleDatesUponSubmit} />
				</form>
			}
		</>
	);
};

export default EmployeeForm;
