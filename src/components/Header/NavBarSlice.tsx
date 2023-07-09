import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
    activeIndex: 0
}

export const NavBarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNewActiveNavBarItem: (state, action) => {
            state.activeIndex = action.payload;
        },
    }
})

export const { setNewActiveNavBarItem } = NavBarSlice.actions

export const selectedIndex = (state: RootState) => state.navbar.activeIndex

export default NavBarSlice.reducer