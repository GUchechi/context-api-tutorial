import React, { createContext, useState} from 'react';

export const ProjectContext = createContext();

export const ProjectState = ({children}) => {

    const [name, setName] = useState("")

    const handler = () => {
        console.log("Hello world")
    }

    return (
        <ProjectContext.Provider value={{name, setName, handler}}>
            {children}
        </ProjectContext.Provider>
    )
}