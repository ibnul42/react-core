import createContext from "../context/Context";
import React from "react";

const themeContext = React.createContext({
    theme: 'light',
});

export default themeContext;  