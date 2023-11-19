import { Container, Logo } from "../ui";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Logo></Logo>
			</Container>
		</header>
	);
};
