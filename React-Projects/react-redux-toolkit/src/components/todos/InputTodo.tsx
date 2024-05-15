/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, getTodos, addTodos } from "../../slices/todos/todos-slice";
import { TodoType } from "../../types/todo-types";
import { v4 } from "uuid";
import TodoList from "./TodoList";

const InputTodo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<TodoType>({
        id: v4(),
        title: "",
        isCompleted: true
    });

    const addTodoHandler = () => {
        try {
            setTodo((prevState) => ({
                ...prevState,
                id: v4(),
                isCompleted: true,
                title: todo.title
            }));

            dispatch(addTodo(todo));
            dispatch(addTodos(todo));
            setTodo((prevState) => ({
                ...prevState,
                title: ""
            }));
        } 
        catch (error) {
            console.log("Error in adding the todo")
        }
    };

    return (
        <div className="input-field col s6">
            <input id="title" type="text" className="validate" 
                onChange={(e: any) => {
                    setTodo((prevState) => ({
                        ...prevState,
                        title: e.target.value,
                    }));
                }} value={todo.title}
            />
            <label htmlFor="title">Todo Title</label>
            {/* функція додавання todo працюватиме тільки тоді, коли заповнено title */}
            <a className="waves-effect waves-light btn-large" onClick={todo.title.length > 0 ? addTodoHandler : () => {}}>
                <i className="material-icons left">chevron_right</i>Add
            </a>
            <a className="waves-effect waves-light btn-large " onClick={() => dispatch<any>(getTodos())}>
                <i className="material-icons left">chevron_right</i>Get Todos from Server
            </a>
            {/* <a className="waves-effect waves-light btn-large " onClick={() => dispatch<any>(addTodos(todo))}>
                <i className="material-icons left">chevron_right</i>Add to Server
            </a> */}
            <TodoList />
        </div>
    );
};

export default InputTodo;