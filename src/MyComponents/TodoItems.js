import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4 className='text-left'>{todo.title}</h4>
            <p>{todo.desc}</p>
            {/*                       | ()> arrow function use to pass a function   */ }                   
            <button className="btm btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>
                Delete</button>
        </div>
        <hr/>
        </>
    )
}
