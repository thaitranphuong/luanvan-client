import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: { status: 'idle', categories: [] },
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'idle';
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.todos.forEach((todo) => {
                    if (todo.id === action.payload.id) todo.completed = !todo.completed;
                });
            });
    },
});

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
    });
    const data = await res.json();
    return data.todos;
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async (id) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(id),
    });
    const data = await res.json();
    return data.todos;
});

export default todoSlice;
