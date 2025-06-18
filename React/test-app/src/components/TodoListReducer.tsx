import { useReducer, useState } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type Action =
    | { type: "add"; text: string }
    | { type: "toggle"; id: number }
    | { type: "remove"; id: number };

function todoReducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.text,
                    completed: false,
                },
            ];
        case "toggle":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "remove":
            return state.filter((todo) => todo.id !== action.id);

        default:
            return state;

    }
}


const TodoListReducer = () => {
    // useReducer hook to manage the todo list
    const [todos, dispatch] = useReducer(todoReducer, []);
    // State for the new todo input
    const [input, setInput] = useState<string>("");

    // Handler for adding a new todo
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (input) {
            dispatch({ type: "add", text: input });
            setInput("");
        }
    };


    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-primary">Todo List Manager (useReducer)</h2>
            {/* Input and Add button */}
            <form className="d-flex mb-3" onSubmit={handleAdd}>
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Add a new todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                    Add
                </button>
            </form>

            {/* Show message if no todos */}
            {todos.length === 0 && (
                <div className="alert alert-info">No todos yet. Add one above!</div>
            )}

            {/* Todo list */}
            <ul className="list-group">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "#888" : "#222",
                            }}
                        >
                            {todo.text}
                        </span>
                        <div>
                            {/* Toggle completion */}
                            <button
                                className={`btn btn-sm me-2 ${todo.completed ? "btn-secondary" : "btn-outline-secondary"
                                    }`}
                                onClick={() => dispatch({ type: "toggle", id: todo.id })}
                            >
                                {todo.completed ? "Undo" : "Complete"}
                            </button>
                            {/* Remove todo */}
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => dispatch({ type: "remove", id: todo.id })}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListReducer;