import React from 'react';
import Form from './Form';

const CheckInput = () => {

    const style = {
        display : "flex",
        flexDirection : "column",
        width : "200px"
    }

    // inputRef 를 전달
    // formRef 를 전달
    // 버튼을 클릭하면 input의 값을 유효성 겁사 할 수있는 함수 제작 후 전달
    return (
        <div>
            <Form />
        </div>
    );
};

export default CheckInput;