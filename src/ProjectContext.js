import React, { createContext, useState} from 'react';

export const ProjectContext = createContext();

export const ProjectState = ({children}) => {
    const [name, SetName] = useState("John")

    const handler = () => {
        console.log("Hello World!");
    }

    return (
        <ProjectContext.Provider value={{name, SetName, handler}}>
           {children}
        </ProjectContext.Provider>
    )
}