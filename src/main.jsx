import React from 'react'
import ReactDOM from 'react-dom/client'
import '~/assets/css/tailwind.css'
import Home from "~/pages/home/index.jsx";
import {Provider} from "react-redux";
import store from "~/stores/index.js";
import './utils/language.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <Home/>
    </Provider>
  </React.StrictMode>,
)
