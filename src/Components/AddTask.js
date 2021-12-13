import {
	Button,
	Checkbox,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { clearAllAction } from "../Actions/addTaskAction";
import { toggleCheck } from "../Actions/addTaskAction";
import { removeTask } from "../Actions/addTaskAction";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const AddTask = () => {
	const message = (
		<p>
			Hey y'all. This task tracker app is basically a todo
			app with a little bit more finesse. It helps you keep
			track of your stuff.
		</p>
	);

	const states = useSelector((state) => state.todos);
	const date = useSelector((state) => state.todos);
	console.log(date.todos);
	const clearAllTodos = useSelector(
		(state) => state.clearAllTodos
	);
	const isChecked = useSelector((state) => state.isChecked);
	console.log("Checked", isChecked);
	const dispatch = useDispatch();

	const notify = () => {
		toast(message, {
			duration: 5000,
			style: {
				position: "bottomCenter",
				textTransform: "Capitalize",
				fontWeight: "normal",
				backgroundColor: "#1976d2",
				color: "#ffffff",
				lineHeight: "1.50em",
			},
		});
	};

	return (
		// <h1>Testing</h1>
		<Box className="tasks" margin={2}>
			{states.length === 0 ? (
				<Typography
					variant="h6"
					style={{ opacity: "0.3" }}
					fontWeight="regular"
					align="center"
					color="#333333"
				>
					You currently have no tasks to track.
				</Typography>
			) : (
				states.map((initialTask, index) => (
					<div
						className={isChecked ? "unchecked" : "checked"}
						key={index}
					>
						<p>{initialTask.task}</p>

						<div
							className="closeBtn"
							onClick={() =>
								window.confirm(
									`Are you sure you want to remove " ${initialTask} " ?`
								) && dispatch(removeTask(index))
							}
						>
							&times;
						</div>
						<Checkbox
							onClick={() =>
								dispatch(toggleCheck(!isChecked))
							}
						/>
						<small style={{ marginTop: -10 }}>
							{initialTask.date}
						</small>
					</div>
				))
			)}
			<Box mt={6} className="footer">
				<Button
					color="primary"
					onClick={() =>
						dispatch(clearAllAction(clearAllTodos))
					}
				>
					Clear All
				</Button>
				<Button color="primary" onClick={() => notify()}>
					<Toaster />
					About App
				</Button>
			</Box>
		</Box>
	);
};

export default AddTask;
