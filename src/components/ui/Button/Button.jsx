import styles from "./Button.module.scss";
import plusIcon from "./../../../img/icons/plus.svg";

export const Button = ({ children, icon = plusIcon, onClick }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
			{icon && <img src={icon} alt="Icon" />}
		</button>
	);
};
