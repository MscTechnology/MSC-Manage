import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        userOutDate: [],
        isPersonel: false,
        isAdmin: false
    },  
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isPersonel = true;
            state.isAdmin = false;
        },
        setAdmin: (state, action) => {
            state.user = action.payload;
            state.isAdmin = true;
            state.isPersonel = false;
        },
      
    }
});

export const {setUser,setAdmin,setLoginDate,setOutDate} = UserSlice.actions;
export default UserSlice.reducer;