import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user/user-slice";
import todosSlice from "../slices/todos/todos-slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todos: todosSlice,
    },
});