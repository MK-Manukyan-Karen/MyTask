import React, { useState, useRef } from 'react';
import style from './Input.module.css';
import { FiDelete } from 'react-icons/fi'

const Input = React.memo((props) => {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const changHandler = (e) => {
    setValue(e.target.value)
  }

  const deleteInputValues = (e) => {
    setValue('')
    inputRef.current.focus()
  }

  const focusHandler = () => {

    setTimeout(() => {
      props.setCount(0)
      props.setNumbers(value)
    }, 2000)
  }

  return (
    <div className={style.inputField}>
      <input type={props.type || "text"} id={props.id || 'inputId'} className={style.input} name={props.name}
        value={value} onChange={changHandler} ref={inputRef} onBlur={focusHandler} />
      <label htmlFor={props.id || 'inputId'} className={value ? style.labelActive : style.label}>
        {value ? `Symbols count\` ${value.length}` : props.placeholder}
      </label>
      {value && <FiDelete className={style.removeIcon} onClick={deleteInputValues} />}
    </div>
  )
})

export default Input