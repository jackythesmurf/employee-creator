import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetOptions from "./GetOptions";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { describe, it, expect, vi } from "vitest";
import CreateEmployee from "../../../types/CreateEmployee";
type GetInputPros = {
	register: UseFormRegister<CreateEmployee>;
	errors: FieldErrors<CreateEmployee>;
	inputField: keyof CreateEmployee;
	placeHolder: string[];
	title: string;
};

describe("GetOptions", () => {
	it("should render two radio buttons and toggle their values when clicked", () => {
		const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {},
			inputField: "status",
			placeHolder: ["Option 1", "Option 2"],
			title: "Test Options",
		};

		render(<GetOptions {...mockProps} />);

		const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
		const option1 = radioButtons[0];
		const option2 = radioButtons[1];

		fireEvent.click(option1);
		expect(option1.checked).toBe(true);

		fireEvent.click(option2);

		expect(option2.checked).toBe(true);
	});
    it("Should render the error message", () => {
        const mockProps: GetInputPros = {
			register: vi.fn(),
			errors: {status:{
                message: "Error Message"
            }} as FieldErrors<CreateEmployee>,
			inputField: "status",
			placeHolder: ["Option 1", "Option 2"],
			title: "Test Options",
		};
        render(<GetOptions {...mockProps} />);
        const errorMessage = screen.getByText('Error Message');
        expect(errorMessage).toBeInTheDocument();
    })
});
