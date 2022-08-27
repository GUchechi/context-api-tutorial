import React, { useContext } from 'react'
import { ProjectContext } from './ProjectContext'

const ContactInfo = () => {
  const {name, handler, number} = useContext(ProjectContext)
    
  return (
    <div>
        <h1>{number}</h1>
    </div>
  )
}

export default ContactInfo