import React, { createContext, useState} from 'react';

export const ProjectContext = createContext();

export const ProjectState = ({children}) => {
    const [name, SetName] = useState("John")


    const handler = () => {
        const newValue = "God is great"

        SetName(newValue)
    }

    return (
        <ProjectContext.Provider value={{name, SetName, handler}}>
           {children}
        </ProjectContext.Provider>
    )
}