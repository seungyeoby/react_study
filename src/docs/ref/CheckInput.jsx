import React, { useRef } from 'react';
import Form from './Form';

const CheckInput = () => {

    const style = {
        display : "flex",
        flexDirection : "column",
        width : "200px"
    }

    // inputRef 를 전달
    const inputRef = useRef([]);
    // formRef 를 전달
    const formRef = useRef(null);
    // 버튼을 클릭하면 input의 값을 유효성 겁사 할 수있는 함수 제작 후 전달
    const oncClickToCheckInputValue = () =>{
        for(let input of inputRef.current){
            if(!input.value){
                alert(`${input.name} 값을 입력하세요.`)
            }
        }
        formRef.current.submit();

    }
    
    
    return (
       <Form style={style} inputRef ={inputRef} formRef = {formRef} oncClickToCheckInputValue ={oncClickToCheckInputValue}/>
    );
};

export default CheckInput;