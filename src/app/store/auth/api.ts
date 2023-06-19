import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInput } from "../../types/types";

export const postData = createAsyncThunk('postUser', async (data: UserInput) => {
    if (data.email !== 'user@email.com' || data.password !== 'UserPassword') {
        // Simulate a failed response
        throw new Error("User not found");
    }
    const response = await fetch('http://localhost:7000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
});

export const getData = createAsyncThunk('postUser', async (data: UserInput) => {

    const response = await fetch('http://localhost:7000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
});