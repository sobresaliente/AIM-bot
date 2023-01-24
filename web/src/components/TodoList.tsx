import { useEffect, useState } from "react";

interface ITask {
  name: string;
  id: string;
  difficulty: number;
}

const TodoList = () => {
  const [todos, setTodos] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Error with fetching tasks");
      }
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {todos.map((task) => (
        <div key={task.id}>{task.name + " " + task.difficulty}</div>
      ))}
    </div>
  );
};
export default TodoList;
