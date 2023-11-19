import { CreateTask, TodoItems } from "./components";
import { Container } from "./components/ui";
import { useSelector } from "react-redux";
import { Header } from "./components";

function App() {
	const tasks = useSelector((state) => state.toolkit.todos);
	return (
		<>
			<Header></Header>
			<main className="App">
				<Container>
					<CreateTask tasks={tasks}></CreateTask>
					<TodoItems tasks={tasks}></TodoItems>
				</Container>
			</main>
		</>
	);
}

export default App;
