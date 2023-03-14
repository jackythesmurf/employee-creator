import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetCheckBox from "./GetCheckBox";
import { describe, it, expect, vi } from "vitest";

describe("GetCheckBox", () => {
	it("should render the checkbox and label", () => {
		render(<GetCheckBox register={vi.fn()} />);
		const checkbox = screen.getByRole("checkOnGoing");
		expect(checkbox).toBeInTheDocument();
		const label = screen.getByText("On Going");
		expect(label).toBeInTheDocument();
	});

    it("should toggle the checkbox value when clicked", () => {
        const registerMock = vi.fn();
        render(<GetCheckBox register={registerMock} />);
        const checkbox = screen.getByRole("checkOnGoing") as HTMLInputElement;
    
        // Verify that the initial value of the checkbox is false
        expect(checkbox.checked).toBe(false);
    
        // Simulate a click event on the checkbox
        fireEvent.click(checkbox);
    
        // Verify that the value of the checkbox has changed to true
        expect(checkbox.checked).toBe(true);
    
      });
});
