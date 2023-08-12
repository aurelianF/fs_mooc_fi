import { useState } from "react";

const Button = function (props) {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}
export default function AppEventHandles() {
    const [value, setValue] = useState(100);

    const setToValue1 = (newValue) => {
        const handler = () => {
            console.log('value now', newValue)  // print the new value to console
            setValue(newValue);
        };
        return handler;
    };
    const setToValue2 = (newValue) => {
        console.log('value now', newValue)  // print the new value to console
        setValue(newValue);
    };    
    
    console.log('value now', value)  // print the new value to console
    return (
        <div>
            <p>Hello 1</p>
            {/* <button onClick={() => setToValue2(1000)}>1000</button>
            <button onClick={() => setToValue2(0)}>Reset</button>
            <button onClick={() => setToValue2(value + 1)}>Incement</button> */}
            <Button handleClick={() => setToValue2(1000)} text = "Thousand"/>
            <Button handleClick={() => setToValue2(0)} text = "Reset"/>
            <Button handleClick={() => setToValue2(value+1)} text = "Increment"/>
        </div>
    )
}