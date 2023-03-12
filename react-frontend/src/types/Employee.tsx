type Employee = {
	// id: number;
	firstName: string;
	middleName: string | null;
	lastName: string;
	email: string;
	phoneNum: string;
	address: string;
	startDate: string;
	finishDate: string | null;
	status: string;
	onGoing: boolean;
	hoursPerWeek: number;
	workBasis: string;
};

export default Employee