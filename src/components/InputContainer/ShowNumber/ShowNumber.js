import React from 'react'
import style from './ShowNumber.module.css'

const ShowNumber = ({ number }) => {

    return (

        <div className={style.container} >
            <div className={style.number}>
                {number}
            </div>
        </div>



    )
}

export default ShowNumber