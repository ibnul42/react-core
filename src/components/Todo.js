import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'You need some javascript skills' : null;

        setTodo(inputValue);
        setWarning(updatedWarning); 
    }
    return(
        <div>
            <p>{Todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    )
}

export default Todo;