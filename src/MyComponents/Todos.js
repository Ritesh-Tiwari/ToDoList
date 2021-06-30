import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {
    let mystyle={
        minHeight:'40vh',
        margin:"40px auto"
    }
    return (

        <div className="container my-3 " style={mystyle}>
            <h3 className="text-center">Todos List </h3>

            {/* {props.todos} */}

            {props.todos.length === 0 ? "No Todos Itmes found" :

                props.todos.map((todo) => {
                    // pass todos items and ondelete method 
                    return (<TodoItems todo={todo}  key={todo.sno} onDelete={props.onDelete} />);
                })}



        </div>

    )
}
