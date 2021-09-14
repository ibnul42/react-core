// import ClockList from './components/ClockList';
// import Clock from './components/Clock';
// import Form from './components/Form';
// import Calculator from "./components/Calculator";
// import Text from '../src/components/inheritance/Text';
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

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
        <Emoji>
            {({addEmoji}) => (
                <Bracket>
                    {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji>
    );
}

export default App;