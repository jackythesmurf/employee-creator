const GetInputList = [
    {
        label: "First Name",
        name: "firstName",
        value: "John",
    },
    {
        label: "Middle Name",
        name: "middleName",
        value: " ",
    },
    {
        label: "Last Name",
        name: "lastName",
        value: "Smith",
    },
    {
        label: "Email",
        name: "email",
        value: "sam.riley@gmail.com",
        validation: {
            pattern: {
                value:/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Must be an email",
            },
        },
    },
    {
        label: "Mobile Number",
        name: "phoneNum",
        value: "0412345678",
        validation: {
            pattern: {
                value: "/^((\\+?61)|0)[2-478](\\s?\\d{4}){2}$/i",
                message: "Must be an Australia Phone Number",
            },
        },
        prompt: "Must be an Australian Number",
    },
    {
        label: "Residental Address",
        name: "address",
        value: "123 Example St",
        prompt: "Must be an Australian Address",
    },
];

const GetDateList = [
    {
        label: "Start Date",
        mightDisable: false,
        askForStartDate: true,
    },
    {
        label: "Finish Date",
        mightDisable: true,
        askForStartDate: false,
    },
];
export default {GetInputList, GetDateList}