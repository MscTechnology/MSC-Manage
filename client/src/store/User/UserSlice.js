import { createSlice } from "@reduxjs/toolkit";
import { gql, useQuery } from "@apollo/client";


const GET_USER = gql`
  query GetUser {
    usertypes {
      id
      typename
    }
  }
`;




export const UserSlice = createSlice({
    name: "user",
    initialState: {

    },
    reducers: {}
});

export const { } = UserSlice.actions;
export default UserSlice.reducer;