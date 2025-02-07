import { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    function addTodo() {
        if (inputText.trim() !== '') {
            setTodos([...todos, inputText]);
            setInputText(''); // Clear input after adding
        }
    }

    function removeTodo(index) {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className="todo-list">
            <h2>My Wishlist 📝</h2>
            <div className="add-todo">
                <input 
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Wishlist"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button 
                            onClick={() => removeTodo(index)}
                            className="delete-btn"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;