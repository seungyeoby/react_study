import React from 'react';

const Form = () => {
    // CheckInput 에서 props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
    return (
        <form>
            <input type="text" name='email'/>
            <input type="password" name='password'/>
            <input type="text" name='이름'/>
            <input type="text" name='age'/>
            <button>입력완료</button>
        </form>
    );
};

export default Form;