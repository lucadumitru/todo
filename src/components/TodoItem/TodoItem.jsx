import { useDispatch } from "react-redux";
import { DeleteBtn } from "../ui";
import styles from "./TodoItem.module.scss";
import { completeTodo, deleteTodo } from "../../store/todoSlice";

export const TodoItem = ({ children, task }) => {
	const dispatch = useDispatch();
	return (
		<div
			className={`${styles.todo_item} ${task.completed ? "_completed" : ""}`}
		>
			<div className={styles.todo_item__checkmark_container}>
				<input
					checked={task.completed}
					onChange={() => dispatch(completeTodo(task.id))}
					className={styles.todo_item__checkbox}
					type="checkbox"
				/>
				<span className={styles.todo_item__checkmark}></span>
			</div>
			<label className={styles.todo_item__label}>{children}</label>
			<DeleteBtn
				deleteTask={() => dispatch(deleteTodo(task.id))}
			></DeleteBtn>
		</div>
	);
};
