import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { useRef } from "react";
import { DevTool } from "@hookform/devtools";
import styles from "./Form.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import GetDate from "./GetDate/GetDate";
import CreateEmployee from "../../types/CreateEmployee";
import GetInput from "./GetInput/GetInput";
import GetOptions from "./GetOptions/GetOptions";
import Employee from "../../types/Employee";
import EditEmployee from "../../container/EditEmployee";
type Employee = {
	// id: number;
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

type CreateEmployee = Employee & {
	startDay: string;
	startMonth: string;
	startYear: string;
	finishDay: string;
	finishMonth: string;
	finishYear: string;
};
interface OmitCreateEmployee: Omit<
	CreateEmployee,
	| "startDay"
	| "startMonth"
	| "startYear"
	| "finishDay"
	| "finishMonth"
	| "finishYear"
>;

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
		const employee: Employee = {
			...employeeData,
		};
		const {isLoading, error, data} = EditEmployee()
	};
	const handleDatesUponSubmit = () => {
		const formateStartDate = () => {
			const date = watch("startDay");
			const month = watch("startMonth");
			const year = watch("startYear");
			return `${date}-${month}-${year}`;
		};
		const formateFinishDate = () => {
			const date = watch("finishDay");
			const month = watch("finishMonth");
			const year = watch("finishYear");
			return watch("onGoing") ? "00-00-00" : `${date}-${month}-${year}`;
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

					{/* <label htmlFor="">Status</label>
					<input
						className={styles.container__inputs}
						type="radio"
						{...register("onGoing", {
							required: true,
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="status"
						as={<p className={styles.container__errors}></p>}
					/>

					<input type="checkBox" /> */}

					<input type="submit" onClick={handleDatesUponSubmit} />
				</form>
			}
		</>
	);
};

export default EmployeeForm;
