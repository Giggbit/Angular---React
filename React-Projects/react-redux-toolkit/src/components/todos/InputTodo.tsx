/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../slices/todos/todos-slice";
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

    const addTodoHandler = (e: any) => {
        try {
            setTodo((prevState) => ({
                ...prevState,
                id: v4(),
                isCompleted: true,
                title: todo.title
            }));
            dispatch(addTodo(todo));
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
            <TodoList />
        </div>
    );
};

export default InputTodo;