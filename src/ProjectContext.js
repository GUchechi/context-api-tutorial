import React, { createContext, useState} from 'react';

export const ProjectContext = createContext();

export const ProjectState = ({children}) => {
    return ProjectContext.Provider({children});
}