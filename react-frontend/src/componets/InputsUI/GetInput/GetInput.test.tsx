import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GetInput from "./GetInput";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import CreateEmployee from "../../../types/CreateEmployee";
import userEvent from "@testing-library/user-event";

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

describe("Testing get input box", () => {
	it("renders correctly with placeholder field", () => {
		const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {},
			inputField: "firstName",
			placeHolder: "Enter first name",
		};
		render(<GetInput {...mockProps} />);
		expect(
			screen.getByPlaceholderText("Enter first name")
		).toBeInTheDocument();
	});
	it("calls register function with correct input field name", () => {
		const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {},
			inputField: "firstName",
			placeHolder: "Enter first name",
		};
		render(<GetInput {...mockProps} />);
		expect(mockProps.register).toHaveBeenCalledWith(
			"firstName",
			expect.any(Object)
		);
	});
    it('displays error message if input is required but not provided', async () => {
        const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {},
			inputField: "firstName",
			placeHolder: "Enter first name",
		};
        const errors = { firstName: { message: 'This is required' } };
        render(<GetInput {...mockProps} errors={errors as FieldErrors<CreateEmployee>
        } />);
        const input = screen.getByRole('inputBox');
        input.focus();
        input.blur();
        const errorMessage = await screen.findByRole('dateBoxErrors');
        expect(errorMessage).toHaveTextContent('This is required');
      });

	it("should correctly save input value", () => {
		const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {},
			inputField: "firstName",
			placeHolder: "Enter first name",
		};
		render(<GetInput {...mockProps} />);

		// Set input value
		const input = screen.getByRole("inputBox") as HTMLInputElement;
		const inputValue = "John";
		fireEvent.change(input, { target: { value: inputValue } });

		// Assert that input value is saved
		expect(input.value).toBe(inputValue);
	});
	it("should render error message for text inputs", async () => {
		const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {
				firstName: { message: "This is required" },
			} as FieldErrors<CreateEmployee>,
			inputField: "firstName",
			placeHolder: "Enter first name",
		};
		render(<GetInput {...mockProps} />);
		expect(screen.getByText("This is required")).toBeInTheDocument();
	});
    
});
