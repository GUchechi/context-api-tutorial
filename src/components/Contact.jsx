import React,{useContext} from 'react'
import ContactInfo from '../ContactInfo'
import {ProjectContext} from '../ProjectContext'

const Contact = () => {
  const {name, handler} = useContext(ProjectContext)

  return (
    <div>
        <h2>{name}</h2>
        <h2 onClick={handler}>2</h2>
        <h2>3</h2>
        <ContactInfo />
    </div>
  )
}

export default Contact