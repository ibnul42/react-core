import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

export default function UseReducerCount() {
    const [count, dispatch] = useReducer(reducer, 10)
    return(
        <div>
            <div>Count - {count}</div> <br />
            <button type="button" onClick={() => dispatch('increment')}>Increment</button>
            <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}