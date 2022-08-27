import React, {createContext, useState} from 'react';

export const ProjectContext = createContext();
export const ProjectState = () => {
    return (
        <ProjectContext.Provider>
            
        </ProjectContext.Provider>
    )
}