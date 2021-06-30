// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'; // importing navbar header.js file
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import { About} from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log("i am onDelete of todo ", todo);
    // delete todos itmes
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.setItem('todos',JSON.stringify(todos))
  }
  const addTodos = (title, desc) => {
    console.log("i am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1; //find last todo sno and add one more todos sno

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);// add a new todos in array 
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        {/* go to the other pages */}
        <Header title="My Todos List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>

                <AddTodos addTodos={addTodos} />
                {/* pass todos array in todos page  */}
                <Todos todos={todos} onDelete={onDelete} />

              </>
            )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>



        <Footer />

      </Router>

    </>
  );
}

export default App;
