import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
// import jwt from "jsonwebtoken";


const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const registerUser = createAsyncThunk(
    "auth/register",
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/register`, values);
            localStorage.setItem("token", JSON.stringify(token.data));
            return token.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/login`, user)
            localStorage.setItem("token", JSON.stringify(token.data.token))
            console.log(token);

            return token.data
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);

        }
    }
)

export const logoutUser = createAsyncThunk("auth/logout", async (user,{ rejectWithValue }) => {
    try {

        localStorage.removeItem("token")
        Cookies.remove("Token")
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
                state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })

        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                // if (action.payload) {
                //     const user = jwt.decode(action.payload);

                //     return {
                //         ...state,
                //         token: user.payload,
                //         name: user.name,
                //         email: user.email,
                //         _id: user._id,
                //         registerStatus: "success",
                //     };
                // }
                // else return state;
            });

        builder
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.message = action.payload
                state.user = null
            })


        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })

        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            });

        builder
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.message = action.payload
                state.user = null
            })

        builder
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true
            })
        builder
            .addCase(logoutUser.fulfilled, (state) => {
                state.user.user.token = null
                state.user = null
            })
        builder
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.message = action.payload
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer;