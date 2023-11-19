import { createSlice } from "@reduxjs/toolkit";

const createTask = (text) => {
	return {
		id: Date.now(),
		text,
		completed: false,
	};
};

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: [],
	},
	reducers: {
		addTodo(state, action) {
			if (action.payload.trim() !== "") {
				state.todos.unshift(createTask(action.payload));
				localStorage.setItem("tasks", JSON.stringify(state.todos));
			}
		},
		completeTodo(state, action) {
			const updatedTasks = state.todos.map((task) =>
				task.id === action.payload
					? { ...task, completed: !task.completed }
					: task
			);
			state.todos = updatedTasks;
			localStorage.setItem("tasks", JSON.stringify(state.todos));
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter((task) => task.id !== action.payload);
			localStorage.setItem("tasks", JSON.stringify(state.todos));
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
