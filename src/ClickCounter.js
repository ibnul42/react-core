import withCounter from "./HOC/withCounter";


// using HOC(Higher Order Component)
const ClickCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default withCounter(ClickCounter);