import React from 'react'
import CalendlyNavbar from '../../components/Calendly/CalendlyNavbar'
import EventTypes from '../../components/Calendly/EventTypes'
// import CalendlyNavbar from "../../components/Calendly/CalendlyNavbar"
// import EventTypes from "../../components/Calendly/EventTypes"


const CalendlyHome = () => {
  
  return (
    <div>
        <CalendlyNavbar />
        
        <EventTypes />
    </div>
  )
}

export default CalendlyHome