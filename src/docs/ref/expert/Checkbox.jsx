import React, { useState } from 'react';

const Checkbox = () => {

const [message , setMessage] = useState([]);
const onClickToCheck = (e) =>{
    let value = e.target.value;
    if(e.target.checked){
        setMessage(message.concat(value))  
        // setMessage([...message, value]) -ES6 문법 (스프레드 - 객체) 
                                   
   }else {
    setMessage(message.filter((m)=> m !== value))
   }
}

    return (
        <div>
            <div>
                <span>front-end</span>
                <input type="checkbox" value="front-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>AI</span>
                <input type="checkbox" value="AI" onClick={onClickToCheck}/>
            </div>
            <div>
                <h1>{message.map((m ,i)=><p key={i}>{m}</p>)}</h1>
            </div>
        </div>
    );
};

export default Checkbox;