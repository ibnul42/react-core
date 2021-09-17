import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function MyEffectComp() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={addClick}>
                Clicked {count} times
            </button>
        </div>
    )
}