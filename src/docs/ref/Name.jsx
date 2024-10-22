import React, { useState } from 'react';
import { useRef } from 'react';

const Name = () => {
    // 사용자가 입력한 이름을 p태그에 실시간으로 작성하고 
    // 버튼을 클릭하면 이름뒤에 "님" 이 붙도록 구현
    // 입력 후 엔터를 누르면 p태그에 반영

    const [result, setResult] = useState("");
   const inputRef = useRef();
    
    const onChangeToInput = (e) => {
        setResult(e.target.value)
    }

    const onClickToButton = () =>{
        setResult(inputRef.current.value+ "님")
    }
 
    return (
        <div>
            <p>{result}</p>
            <input ref={inputRef} type="text" onChange={onChangeToInput} onKeyDown={(e) => {console.log(e)}}/>
            <button onClick={onClickToButton}>버튼 클릭</button>
        </div>
    );
};

export default Name;