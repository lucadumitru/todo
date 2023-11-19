import { useState } from "react";
import { Input, Button } from "../ui";
import styles from "./CreateTask.module.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

export const CreateTask = ({ tasks, setTasks }) => {
	const [input, setInput] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);
	const dispatch = useDispatch();
	const handleInput = (e) => {
		setInput(e.target.value);
		!input.trim("") ? setEmptyInput(true) : setEmptyInput(false);
	};
	const createTask = () => {
		dispatch(addTodo(input));
		setInput("");
		!input.trim("") ? setEmptyInput(true) : setEmptyInput(false);
	};
	return (
		<div className={styles.create_task}>
			<Input
				emptyInput={emptyInput}
				onChange={handleInput}
				value={input}
			></Input>
			<Button onClick={createTask}>Create</Button>
		</div>
	);
};
