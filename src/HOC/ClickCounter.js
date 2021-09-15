// import withCounter from "./withCounter";
import React from "react";


// using HOC(Higher Order Component)
// const ClickCounter = (props) => {
//     const {count, incrementCount} = props;
//     return (
//         <div>
//             <button onClick={incrementCount}>
//                 Clicked {count} times
//             </button>
//         </div>
//     )
// }

// export default withCounter(ClickCounter);

export default class ClickCounter extends React.Component {
    
    
    render() { 
        const {counter, incrementCount} = this.props;
        return(
            <div>
                <button type="button" onClick={incrementCount}>
                    Clicked {counter} times
                </button>
            </div>
        )
    }
}