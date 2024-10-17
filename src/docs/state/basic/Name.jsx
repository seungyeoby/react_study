import React, { useState } from 'react';

const Name = () => {
    // 사용자가 입력한 값을 화면에 바로 출력
    
    
    const [result, setResult] = useState("이름")

    const onChangeInputValue = (e) => {
        setResult(e.target.value)
    }
    return (
        <div>
            <p>{result}</p>
            <input type="text"  onChange={onChangeInputValue}/>
        </div>
    );
};

export default Name;