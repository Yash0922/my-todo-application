import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";
import {Provider} from 'react-redux'
import myStore from './components/Redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <Provider store={myStore}>
               <ChakraProvider theme={theme}>
                    <App />
                    {/* <h1>Hello</h1> */}
               </ChakraProvider>
               </Provider>
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
