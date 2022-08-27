import React, {createContext, useState, useContext} from 'react';

export const ProjectContext = createContext();

export const ProjectState = ({children}) => {
    const [name, setName] = useState("Millionaire");
    const [number, setNumber] = useState("10000000000");

    const handler = () => {
        setName("I'm rich in Christ Jesus");
    }

    return (
        <ProjectContext.Provider value={{name, setName, handler, number}}>
            {children}
        </ProjectContext.Provider>
    )
}