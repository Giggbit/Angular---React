/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoType } from "../../types/todo-types";

const initialState: { todos: TodoType[] } = {
    todos: []
};

export const getTodos = createAsyncThunk(
    "todos/getTodos",
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios.get(
                import.meta.env.VITE_PATH_TO_SERVER + "/todos"
            );
            return res.data as TodoType[];
        }
        catch (error: any){
            return rejectWithValue(error.message);
        }
    },
); 

export const addTodos = createAsyncThunk(
    'todos/addTodos',
    async (todo, { rejectWithValue }) => {
        try {
            const res = await axios.post(import.meta.env.VITE_PATH_TO_SERVER + "/todos", todo);
            return res.data;
        } 
        catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTodos.pending, (state) => {
            console.log("pending");
        })
        .addCase(getTodos.fulfilled, (state, action) => {
            console.log("success");
            state.todos = action.payload;
        })
        .addCase(getTodos.rejected, (state, action) => {
            console.log("rejected");
        });
    },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;