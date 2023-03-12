import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import styles from "./GetOptions.module.scss";

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

type GetInputPros = {
	register: UseFormRegister<CreateEmployee>;
	errors: FieldErrors<CreateEmployee>;
	inputField: keyof CreateEmployee;
	placeHolder: string[];
};

const GetOptions = ({register, errors,  inputField, placeHolder}: GetInputPros) => {
	return (
		<div>
			<div>
				<input
					type="radio"
					value={placeHolder[0]}
                    {
                        ...register(inputField, {
                            required: "This is required"
                        })
                    }
				/>
				<label>{placeHolder[0]}</label>
			</div>
			<div>
				<input
					type="radio"
					value={placeHolder[1]}
                    {
                        ...register(inputField, {
                            required: "This is required"
                        })
                    }
				/>
				<label>{placeHolder[1]}</label>
			</div>
            <ErrorMessage
				errors={errors}
				name={inputField}
				as={<p className={styles.container__errors}></p>}
			/>
            
		</div>
	);
};

export default GetOptions;
