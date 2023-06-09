import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import styles from "./GetOptions.module.scss";
import Employee from "../../../types/Employee";
import CreateEmployee from "../../../types/CreateEmployee";

type GetInputPros = {
	register: UseFormRegister<CreateEmployee>;
	errors: FieldErrors<CreateEmployee>;
	inputField: keyof CreateEmployee;
	placeHolder: string[];
	title: string;
};

const GetOptions = ({
	register,
	errors,
	inputField,
	placeHolder,
	title,
}: GetInputPros) => {
	return (
		<div className={styles.container}>
			<p className={styles.container__title}>{title}</p>
			<div>
				<input
					role={"radio"}
					type="radio"
					value={placeHolder[0]}
					{...register(inputField, {
						required: "This is required",
					})}
				/>
				<label className={styles.container__optionsName}>
					{placeHolder[0]}
				</label>
			</div>
			<div>
				<input
				role={"radio"}
					type="radio"
					value={placeHolder[1]}
					{...register(inputField, {
						required: "This is required",
					})}
				/>
				<label className={styles.container__optionsName}>
					{placeHolder[1]}
				</label>
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
