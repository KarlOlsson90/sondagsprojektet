import React from 'react'

export default function InputFormComponent(props) {
    return (

            <input 
                value={props.value}
                name={props.name}
                type={props.type} 
                onChange={(e) => props.handleInput(e.target.value)} 
                placeholder={props.placeholder}>
            </input>
    )
}