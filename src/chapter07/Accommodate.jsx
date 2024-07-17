import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const max = 10;

function Acccommodate(props){

    const [isFull, setIsFull ] = useState(false);
    const [ count, increaseCount, decreaseCount ] = useCounter(0);

    useEffect(() => {
        console.log("====================");
        console.log("useEffect 호출");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= max);
        console.log(`Curreunt Count Value : ${count}`);
    },[count]);

    return (
        <div style = {{padding: 16}}>
            <p>{`총 ${count}명 수용`}</p>
            <button onClick={increaseCount} disabled = {isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원 초과</p>}
        </div>
    )
}

export default Acccommodate;