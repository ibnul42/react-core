// import ClockList from './components/ClockList';
// import Clock from './components/Clock';
// import Form from './components/Form';
// import Calculator from "./components/Calculator";
// import Text from '../src/components/inheritance/Text';
// import Emoji from "./components/composition/Emoji";
// import Text from "./components/composition/Text";
// import Bracket from "./components/composition/Bracket";
// import ClickCounter from "./HOC/ClickCounter";
// import HoverCounter from "./HOC/HoverCounter";
// import User from "./HOC/User";
// import Counter from "./HOC/Counter";
// import MouseTracker from "./components/MouseTracker";
// import themeContext from "./lib/themeContext";
import MyEffectComp from "./components/MyEffectComp";
// import Todo from "./components/Todo";

function App() {
    // const quantities = [1, 2, 3];
    return (
        // <div>
        //     <ClockList quantities={quantities} />
        // </div>
        // <Clock />
        // <Form />
        // <Calculator /> 
        // <Text />
        // <Emoji>
        //     {({addEmoji}) => (
        //         <Bracket>
        //             {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        //         </Bracket>
        //     )}
        // </Emoji>
        // <div className="App">
        //     <HoverCounter />
        //     <Counter
        //      render={(counter, incrementCount) => (
        //          <ClickCounter counter={counter} incrementCount={incrementCount} />                
        //      )}
        //      />
        //     <User render={(isLoggedIn) => (isLoggedIn ? "Ibnul" : "Guest")} />             
        // </div>   
        // <MouseTracker />
        // <Text />
        <div className="app">
            {/* <Todo /> */}
            <MyEffectComp />
        </div>
    );
}

export default App;