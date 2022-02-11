import React, { useState, useEffect } from 'react'
import style from './InputContainer.module.css'
import Input from './Inputs/Input'
import ShowNumber from './ShowNumber/ShowNumber'

const InputContainer = () => {

    const [number, setNumbers] = useState(0)
    let [count, setCount] = useState(0);

    const numbers = []
    for (let index = 1; index <= number; index++) {
        numbers.push(index)
    }

    useEffect(() => {

        const interval = setInterval(() => {
            if (count >= numbers.length) {
                clearInterval(interval);
            } else {
                setCount(count => count + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count, numbers.length])


    return (
        <div className={style.container}>
            <Input placeholder='Please write some number' type='number' setNumbers={setNumbers} setCount={setCount} />
            {
                numbers.reverse().slice(0, count).map((number, index) => <ShowNumber number={number} key={index} />)
            }
        </div>
    )
}

export default InputContainer