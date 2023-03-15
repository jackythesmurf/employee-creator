import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./Form.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import GetDate from "../InputsUI/GetDate/GetDate";
import GetInput from "../InputsUI/GetInput/GetInput";
import GetOptions from "../InputsUI/GetOptions/GetOptions";
import AddEmployee from "../../services/AddEmployee";
import CreateEmployee from "../../types/CreateEmployee";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import EditEmployee from "../../services/EditEmployee";
import GetCheckBox from "../InputsUI/GetCheckBox/GetCheckBox";
import FormQuestions from "./FormQuestions";
type FromProps = {
	editEmployee: CreateEmployee | undefined;
};

const EmployeeForm = ({ editEmployee }: FromProps) => {
	const { GetInputList, GetDateList } = FormQuestions;
	const navigate = useNavigate();
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
	const onSubmit = async (employeeData: CreateEmployee) => {
		try {
			if (editEmployee) {
				await EditEmployee(employeeData);
			} else {
				await AddEmployee(employeeData);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => {
				location.reload();
				navigate(-1);
			}, 1000); // Delay by 1 second (1000 milliseconds)
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
					{GetInputList.map((input: any, key) => {
						return (
							<div>
								{key == 0 || key == 3 ? (
									<h1 className={styles.container__heading}>
										{key == 0
											? "Personal Infomation"
											: "Contact Details"}
									</h1>
								) : null}
								<label className={styles.container__fieldName}>
									{input.label}
									{input.prompt ? (
										<p className={styles.container__hints}>
											{input.prompt}
										</p>
									) : (
										""
									)}
								</label>

								<GetInput
									register={register}
									errors={errors}
									inputField={input.name}
									placeHolder={input.value}
									optionalPattern={input.validation}
								/>
							</div>
						);
					})}
					<h1 className={styles.container__heading}>
						Employment Status
					</h1>
					<div>
						<GetOptions
							register={register}
							errors={errors}
							inputField={"status"}
							placeHolder={["Permanent", "Contract"]}
							title={"What is contract type"}
						/>
					</div>

					{GetDateList.map((input) => {
						return (
							<div>
								<label className={styles.container__fieldName}>
									{input.label}
								</label>
								<GetDate
									register={register}
									errors={errors}
									askForStartDate={input.askForStartDate}
									disable={
										input.mightDisable
											? watch("onGoing")
											: false
									}
								/>
							</div>
						);
					})}
					<div>
						<GetCheckBox register={register} />
					</div>
					<div>
						<GetOptions
							register={register}
							errors={errors}
							inputField={"workBasis"}
							placeHolder={["Full-time", "Part-time"]}
							title={"Is this on a full-time or part-time basis?"}
						/>
					</div>

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
