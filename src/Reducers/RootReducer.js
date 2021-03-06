const stateStore = {
	todos: [
		// {
		// 	task: "",
		// 	date: "",
		// },
	],
	isClosed: true,
	clearAllTodos: [],
};

const RootReducer = (state = stateStore, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,

				todos: [
					...state.todos,
					{
						task: action.payload[0],
						date: action.payload[1],
					},
				],
			};
		case "IS_CLOSED":
			return {
				...state,
				isClosed: !state.isClosed,
			};

		case "CLEAR_ALL":
			return {
				...state,
				todos: [],
			};
		case "REMOVE_TASK":
			return {
				...state,
				todos: state.todos.filter(
					(todo, index) => index !== action.payload
				),
			};
		default:
			return state;
	}
};

export default RootReducer;
