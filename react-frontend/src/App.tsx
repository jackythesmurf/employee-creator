import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./componets/HomePage/HomePage";
import EditPage from "./componets/EditPage/EditPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const [count, setCount] = useState(0);
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/edit/:id" element={<EditPage />} />
					<Route path="/edit" element={<EditPage />} />
					<Route />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
