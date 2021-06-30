import React, { useState } from 'react';


export const AddTodos = ({ addTodos }) => {

    // creating spece for store data
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState()
    const submit = (e) => {
        e.preventDefault(); // it use for page will be not reload
        if (!title || !desc) {// if no velue given then
            alert("Todo Title and desc not be blank")
        } else {
            addTodos(title, desc)
            setDesc("");
            setTitle("");
        }
    }

    return (
        <div className="container py-3">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    {/*onChange={(e)=>setTitle(e.target.value)} it use to store new values   */}
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
