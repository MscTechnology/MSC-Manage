import { createSlice } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        isLogin: false,
        isPersonel: false,
        isAdmin: false
    },  
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLogin = true;
            state.isPersonel = true;
        },
        setAdmin: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isAdmin = true;
            state.isPersonel = false;
        }
    }
});

export const {setUser,setAdmin} = UserSlice.actions;
export default UserSlice.reducer;