import rocketLogo from "./../../../img/icons/rocket.svg";
import styles from "./Logo.module.scss";

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<img className={styles.logo__img} src={rocketLogo} alt="Rocket icon" />
			<div className={styles.logo__text}>
				to<span>do</span>
			</div>
		</div>
	);
};
