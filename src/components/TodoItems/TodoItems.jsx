import { TodoItem, NoTasks } from "..";
import styles from "./TodoItems.module.scss";

export const TodoItems = ({ tasks }) => {
	const incompleteTasks = tasks && tasks.filter((task) => !task.completed);
	const completedTasks = tasks && tasks.filter((task) => task.completed);
	return (
		<div className={styles.todo_items}>
			<div className={(styles.todo_items__info, styles.info)}>
				<div className={styles.info__block}>
					<div className={styles.info__label}>Tasks created</div>
					<div className={styles.info__quantity}>{tasks.length}</div>
				</div>
				<div className={styles.info__block}>
					<div className={`${styles.info__label} info-completed`}>
						Completed
					</div>
					<div className={styles.info__quantity}>
						{`${completedTasks.length} / ${tasks.length}`}
					</div>
				</div>
			</div>
			{tasks.length ? (
				<ul className={styles.todo_items__list}>
					{incompleteTasks &&
						incompleteTasks.map((task) => (
							<li key={task.id}>
								<TodoItem task={task}>{task.text}</TodoItem>
							</li>
						))}
					{completedTasks &&
						completedTasks.map((task) => (
							<li key={task.id}>
								<TodoItem task={task}>{task.text}</TodoItem>
							</li>
						))}
				</ul>
			) : (
				<NoTasks></NoTasks>
			)}
		</div>
	);
};
