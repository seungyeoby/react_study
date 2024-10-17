import React, { useState } from 'react';

const Colors = () => {
    // 빨간색 버튼을 누르면 글자색을 빨갛게
    // 파란색 버튼을 누르면 글자색을 파랗게
    // 핑크색을 입력하면 글자색을 없애기
    const [result , setResult] = useState("");
    const [color, setColor] = useState("");
    const changeRed = () => {
        setColor("red")
    }
    const changeBlue = () => {
        setColor("blue")
    }
    const inputValue = (e) =>{
        setResult(e.target.value)
        if(e.target.value==="핑크색"){setColor("")}
        return setResult(e.target.value)
    }
    return (

        <div>
            <p style={{color}}>{result}</p>
            <input type="" onChange={inputValue}/>
            <button onClick={changeRed}>빨간색</button>
            <button onClick={changeBlue}>파랑색</button>
        </div>
    );
};

export default Colors;