import React, { useState } from 'react';

const Sound = () => {
    const [sound,setSound] =useState("울음소리");
    // 강아지는 멍멍 , 고양이는 야옹
    const bow = () => {
        setSound("멍멍");
    }

    return (
        <div>
            <p>{sound}</p>
            <button onClick={bow}>강아지 버튼</button>
            <button onClick={() => {
                setSound("야옹");
            }}>고양이 버튼</button>
        </div>
    );
};

export default Sound;