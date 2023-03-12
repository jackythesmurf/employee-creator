import { ErrorMessage } from '@hookform/error-message';
import React from 'react'
import { UseFormRegister, FieldErrors, ValidationRule } from 'react-hook-form';
import CreateEmployee from '../../../types/CreateEmployee';
import styles from "./GetInput.module.scss"


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
    optionalPattern?: OptionalPattern;
};

const GetInput = ({register, errors, inputField, placeHolder, optionalPattern}: GetInputPros) => {
	return (
		<div>
			<input
				className={styles.container__inputs}
				type="text"
				placeholder={placeHolder}
				{...register(inputField, {
					required: "This is required",
					maxLength: {
						value: 50,
						message: "This input must not exceed 50 characters",
					},
                    ...(optionalPattern)
                    
                    
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
export default GetInput