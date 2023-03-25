import React from "react";

const ColorModeContext = React.createContext({
    toggleColorMode: () => { },
    mode: ""
})

export default ColorModeContext;