import { postData } from './api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../types/types';

interface AuthState {
    user: User | null;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    error: null
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
                state.user = { email: action.payload.email, token: action.payload.token };
            })
            .addCase(postData.rejected, (state, action) => {
                state.error = action.error.message ?? null;
            });
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
