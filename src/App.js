import { Paper } from "@mui/material";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AddTask from "./Components/AddTask";
import TaskForm from "./Components/TaskForm";
import TaskHeader from "./Components/TaskHeader";
import RootReducer from "./Reducers/RootReducer";
import "./App.css";

function App() {
	const store = createStore(RootReducer);

	return (
		<Provider store={store}>
			<Paper className="App" elevation={5}>
				<TaskHeader />
				<TaskForm />
				<AddTask />
			</Paper>
		</Provider>
	);
}

export default App;
