import axios from "axios";
import React from "react";
import { useQuery } from "react-query";


const GetEmployee = (id: string) => {
	return useQuery("getEmployeesByID", async () => {
		const res = await axios
            .get("http://localhost:8080/employee" + `/${id}`);
        return res.data;
	});
};

export default GetEmployee;
