import React, { useRef, useState } from 'react';

const FoodContainer = () => {
    // 한국음식 영어음식 이름을 추가하고 해당 음식을 선택해서 삭제하는 로직 만들기
    const [foodList , setFoodList] = useState([]);
    const inputRef = useRef([]);
    const onClickToAddFood = (e) => {
        let foodValue =`${inputRef.current[0].value}(${inputRef.current[1].value})`
        // console.log(foodValue)
        setFoodList(foodList.concat(foodValue))  ;                                                                                                                 
    }
    let deleteFoodValue;
    const checkFoods = (e) =>{
        deleteFoodValue = e.target.value;
    }
    const onClickToDeleteFood = () =>{
        setFoodList(foodList.filter((list)=> list !== deleteFoodValue))
    }

    return (
        <div>
            <div>
                <input ref={(el)=> inputRef.current[0]=el} type='text' placeholder='한국음식 이름'/>
                <input ref={(el)=> inputRef.current[1]=el} type='text' placeholder='영어음식 이름'/>
            </div>
            <div>
            <button type='buttton' onClick={onClickToAddFood}>추가</button>
            <button onClick={onClickToDeleteFood}>삭제</button>
            </div>
            <div>
                {foodList.map((food, i)=> <p key={i}><input type='checkbox' onClick={checkFoods} value={food}/>{food}</p>)}
            </div>
        </div>
    );

};

export default FoodContainer;