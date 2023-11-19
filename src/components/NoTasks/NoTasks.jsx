import styles from "./NoTasks.module.scss";
import tasksIcon from "./../../img/icons/clipboard.svg";

export const NoTasks = () => {
	return (
		<div className={styles.no_tasks}>
			<img
				className={styles.no_tasks__icon}
				src={tasksIcon}
				alt="No tasks icon"
			/>
			<div className={styles.no_tasks__text}>
				<p>
					You don't have any registered tasks yet.{" "}
					<span>Create tasks and organize your to-do items.</span>
				</p>
			</div>
		</div>
	);
};
