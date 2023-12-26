import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarType: 'pageTheme',
    language: 'tr',
    theme: localStorage.getItem('theme') || 'default'
}

const pageTheme = createSlice({
    name: 'pageTheme',
    initialState,
    reducers: {
        _setTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem('theme', action.payload)
        },
        _setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { _setTheme, _setLanguage} = pageTheme.actions
export default pageTheme.reducer