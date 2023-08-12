import { useState } from "react";

// DisplayCounter component version using destructuring and simple expression return
const DisplayCounter = ({ counter }) => (
    <div>
        <p>Counter value is {counter}</p>
    </div>

)

// DisplayCounter component version using destructuring
// const DisplayCounter = ({ counter }) => {
//     return (
//         <div>
//             <p>Counter value is {counter}</p>
//         </div>
//     );
// }

// Initial full fledged DisplayCounter defitnition
/* const DisplayCounter = (props) => {
    return (
        <div>
            <p>Counter value is {props.counter}</p>
        </div>
    );
}
 */const ButtonComponent = (props) => {

    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    );
}
export default function CacaAppRerendering() {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([null])
    const [total, setTotal] = useState(0)
    
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
        const totalClickCount = total;
        setTotal(left + right);
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
        setTotal(left + right);
    }
    // const AppRerendering = (props) => {
    const [counter, setCounter] = useState(1200);
    console.log('rendering with counter value', counter)
    // debugger
    console.log('rendering with counter value'+ counter)

    // console.log("counter value: " + counter);

    // setInterval(() => setCounter(counter+1), 1000);
    /*     setInterval(() => {
            // console.log("Cacamaca");
            return setCounter(counter+1);
            }, 1000);
     */
    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1);
    }
    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0);
    }
    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1);
    }
    // registring a click handler function
    /*     const handleClick = () => {
            setCounter(counter + 1);
            console.log("Clicked!!!");
        }; */

    return (
        // <div>
        //     <p>This is ok!</p>
        //     {/* <div>{counter}</div> */}
        //     <DisplayCounter counter={counter} />

        //     {/* <button onClick={increaseByOne}>
        //         Plus
        //     </button>
        //     <button onClick={setToZero}>
        //         Reset
        //     </button> */}
        //     <ButtonComponent handleClick={increaseByOne}> PLUS </ButtonComponent>
        //     <ButtonComponent handleClick={setToZero}> RESET </ButtonComponent>
        //     <ButtonComponent handleClick={decreaseByOne}> MINUS </ButtonComponent>
        // </div>

        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>total: {total}</p>
        </div>
    )
}
// export default AppRerendering;