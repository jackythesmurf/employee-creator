import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { UseFormRegister, FieldErrors, ValidationRule } from "react-hook-form";
import styles from "./GetInput.module.scss";
import Employee from "../../../types/Employee";
import CreateEmployee from "../../../types/CreateEmployee";

type OptionalPattern = {
	pattern: {
		value: RegExp;
		message: string;
	};
};

type GetInputPros = {
	register: UseFormRegister<CreateEmployee>;
	errors: FieldErrors<CreateEmployee>;
	inputField: keyof CreateEmployee;
	placeHolder: string;
	optionalPattern?: OptionalPattern | undefined;
};

const GetInput = ({
	register,
	errors,
	inputField,
	placeHolder,
	optionalPattern,
}: GetInputPros) => {
	return (
		<div className={styles.container}>
			<input
				className={styles.container__inputs}
				type="text"
				placeholder={placeHolder}
				{...register(inputField, {
					required: {
						value: inputField === "middleName" ? false : true,
						message: "This is required",
					},
					maxLength: {
						value: 50,
						message: "This input must not exceed 50 characters",
					},
					...optionalPattern,
				})}
			/>
			<ErrorMessage
				errors={errors}
				name={inputField}
				as={<p className={styles.container__errors}></p>}
			/>
		</div>
	);
};
export default GetInput;
