import {
	Button,
	Checkbox,
	FormControl,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { addTaskAction } from "../Actions/addTaskAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TaskForm = () => {
	const isClosed = useSelector((state) => state.isClosed);
	const [todos, setTodos] = useState("");
	const [dates, setDates] = useState("");
	console.log(dates);

	const handleChange = (e) => setTodos(e.target.value);

	const dispatch = useDispatch();

	const handleDispatch = () => {
		dispatch(addTaskAction(todos, dates));
		setTodos("");
		setDates("");
	};
	return isClosed ? (
		<FormControl className="text_field_container">
			<TextField
				autoFocus={true}
				autoComplete="true"
				autoCapitalize="true"
				spellCheck="true"
				autoCorrect="true"
				size="small"
				label="Add task"
				placeholder="Eg. Check mail"
				className="text_field"
				margin="normal"
				value={todos}
				onChange={handleChange}
			/>
			{/* Add day and time */}
			<TextField
				autoComplete="true"
				autoCorrect="true"
				size="small"
				type="time"
				value={dates}
				className="text_field"
				margin="normal"
				helperText="Add date and time"
				onChange={(e) => setDates(e.target.value)}
			/>

			<Box className="reminder" mb={2}>
				<Typography>Set Reminder</Typography>
				<Checkbox />
			</Box>

			<Button
				onClick={() => handleDispatch()}
				disabled={
					todos.length && dates.length ? false : true
				}
				style={{ width: "90%" }}
				color="primary"
				variant="contained"
			>
				{todos.length && dates.length
					? "Save Task"
					: "Type to add tasks"}
			</Button>
		</FormControl>
	) : (
		<Box margin={4}>
			<Typography
				variant="h6"
				fontWeight="regular"
				color="#333333"
			>
				{/* <hr /> */}
				Form Closed. Tap button to add tasks.
			</Typography>
		</Box>
	);
};

export default TaskForm;
