import { configureStore } from "@reduxjs/toolkit";

// reducers
import pageTheme from "~/stores/pageTheme/index.js";

const store = configureStore({
    reducer: {
        pageTheme
    }
})

export default store