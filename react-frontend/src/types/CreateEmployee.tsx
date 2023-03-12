import Employee from "./Employee";
type CreateEmployee = Employee & {
	startDay: string;
	startMonth: string;
	startYear: string;
	finishDay: string;
	finishMonth: string;
	finishYear: string;
};
export default CreateEmployee