import styles from "./Input.module.scss";

export const Input = ({ onChange, value, emptyInput }) => {
	return (
		<input
			onChange={onChange}
			value={value}
			placeholder="Add a new task"
			className={`${styles.input} ${emptyInput ? "_empty" : ""}`}
		></input>
	);
};
