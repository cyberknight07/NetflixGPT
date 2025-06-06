import { createSlice } from "@reduxjs/toolkit";
import { auth } from "./firebase";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return "";
        }
    }
})

export const {addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;