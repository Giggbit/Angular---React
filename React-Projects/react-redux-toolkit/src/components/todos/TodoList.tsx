/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { TodoType } from "../../types/todo-types";
import Todo from "./Todo";

const TodoList = () => {
    const todos: Array<TodoType> = useSelector((state: any) => {
        return state.todos.todos;
    });

    return (
        <>
            { todos.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Is completed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos?.map((el: TodoType) => {
                            return <Todo key={el.id} props={el} />;
                        })}
                    </tbody>
                </table>
            ) : ( <p>Todo list is empty</p>)}
        </>
    );
};

export default TodoList;