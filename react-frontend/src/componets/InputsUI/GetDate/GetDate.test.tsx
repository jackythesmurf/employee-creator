import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GetDate from "./GetDate";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import CreateEmployee from "../../../types/CreateEmployee";
import userEvent from "@testing-library/user-event";

describe("GetDate component", () => {
  const registerMock = vi.fn();

  it("renders date inputs and labels correctly", () => {
    render(<GetDate register={registerMock} errors={{}} askForStartDate={true} disable={false} />);

    expect(screen.getByRole("Date")).toBeInTheDocument();
    expect(screen.getByRole("Month")).toBeInTheDocument();
    expect(screen.getByRole("Year")).toBeInTheDocument();
  });

  it("renders select box with correct options", () => {
    render(<GetDate register={registerMock} errors={{}} askForStartDate={true} disable={false} />);

    const selectBox = screen.getByRole("Month");
    expect(selectBox).toBeInTheDocument();

    fireEvent.click(selectBox);

    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.getByText("February")).toBeInTheDocument();
    expect(screen.getByText("March")).toBeInTheDocument();
    expect(screen.getByText("April")).toBeInTheDocument();
    expect(screen.getByText("May")).toBeInTheDocument();
    expect(screen.getByText("June")).toBeInTheDocument();
    expect(screen.getByText("July")).toBeInTheDocument();
    expect(screen.getByText("August")).toBeInTheDocument();
    expect(screen.getByText("September")).toBeInTheDocument();
    expect(screen.getByText("October")).toBeInTheDocument();
    expect(screen.getByText("November")).toBeInTheDocument();
    expect(screen.getByText("December")).toBeInTheDocument();
  });

  it("disables inputs when disable prop is true", () => {
    render(<GetDate register={registerMock} errors={{}} askForStartDate={true} disable={true} />);

    const inputDate = screen.getByRole("dateInput") as HTMLInputElement;
    const inputYear = screen.getByRole("yearInput") as HTMLSelectElement;
    const selectBoxMonth = screen.getByRole("monthInput") as HTMLSelectElement;
    const testInputs = [inputDate,inputYear,selectBoxMonth ]
    testInputs.forEach((input) => {
      expect(input.disabled).toBe(true);
    });

  });

  it("displays error message when input is invalid", async () => {
    const errorsMock = {
      startDay: { type: "min", message: "Min date is 1" },
    };

    render(<GetDate register={registerMock} errors={errorsMock} askForStartDate={true} disable={false} />);

    const errorMessage = await screen.findByText("Min date is 1");
    expect(errorMessage).toBeInTheDocument();
  });
});
