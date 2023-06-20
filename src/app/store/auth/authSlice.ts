import { getNotification, postData } from './api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../types/types';

interface AuthState {
    user: User | null;
    error: string | null;
    notification: string | null;
}

const initialState: AuthState = {
    user: null,
    error: null,
    notification: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postData.fulfilled, (state, action) => {
                state.user = { email: action.payload.email, token: "$2a$10$r6q9KZbjlYUkoBCzRXLIOeWnyDe7BB13KT1MUvE98xuAvEkkFCnWS" };
            })
            .addCase(postData.rejected, (state, action) => {
                state.error = action.error.message ?? null;
            })
            .addCase(getNotification.fulfilled, (state, action) => {
                state.notification = action.payload[0].description;
            });
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
