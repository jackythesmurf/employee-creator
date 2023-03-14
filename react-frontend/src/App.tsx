import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./componets/HomePage/HomePage";
import EditPage from "./componets/EditPage/EditPage";
import { QueryClient, QueryClientProvider } from "react-query";
import fetchAllEmployee from "./container/fetchAllEmployee";

function App() {
	const [count, setCount] = useState(0);
	const [employeeList, setEmployeeList] = useState(null);
	const { isLoading, error, data } = fetchAllEmployee();
	useEffect(() => {
		setEmployeeList(data);
		return () => {};
	}, [data]);
	return (
		<BrowserRouter>
			{!Array.isArray(employeeList) ? (
				"Loading"
			) : (
				<Routes>
					<Route
						path="/"
						element={<HomePage employeeList={employeeList} />}
					/>
					<Route
						path="/edit/:id"
						element={<EditPage employeeList={employeeList} />}
					/>
					<Route path="/edit" element={<EditPage />} />
					<Route />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
