import React from 'react'
import Button from './Button';

export default function Form({handleChange, handleSubmit}) {
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}></input>
                <Button text= 'Add' color='bgcolor'/>
            </form>
        </div>
    )
}
