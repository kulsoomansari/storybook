import React from 'react'

export default function Button({text, color}) {
    return (
             <button type='submit' style={{backgroundColor: color}}>{text}</button>
    )
}
