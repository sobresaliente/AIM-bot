import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
