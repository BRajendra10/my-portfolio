import React from 'react'
import { createContext, useState } from 'react';

export const IntroContext = createContext(false);

export default function IntroContextProvider({ children }) {
    const [ hide, setHide ] = useState(false);

    const handleState = (value) => {
        setHide(value);
    }

    return (
        <IntroContext.Provider value={{ hide, handleState }}>
            {children}
        </IntroContext.Provider>
    )
}