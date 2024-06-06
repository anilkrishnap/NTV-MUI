import React from 'react'
import NtvSideNav from '../NtvSideNav/page'
import "../../../styleguide.css"


function page() {

const variants = {
  dark: {
    backgroundColor: 'var(--Dark-bg-bg1-value)',
    // backgroundColor: 'black',
    color:"white !important",
    color2:"#0958D9",
    textcolor: " #D0D5DD",
    // color2:"var(--DQI-Widget-sub-title, #98A2B3)",
  
    // backgroundColor:"black",
    backgroundColorCard:'var(--BG-2-blue-in-light, #152130)',
    backgroundColorTopology:"black",
    backgroundColorHeader:"var(--BG-3-white-in-light, #1D2939);",
    backgroundColorMadeline:"var(--BG-2-blue-in-light, #152130);"
    
    
  },
  hybrid:{
    backgroundColor: ' var(--Dark-general-g2-value)',
    // backgroundColor: 'black',
    color:" --Dark-text-t1-value",
    // color2:"var(--DQI-Widget-sub-title, #98A2B3)",
  
    // backgroundColor:"black",
    backgroundColorCard:'var( --Dark-general-g4-value)',
    backgroundColorTopology:"var(--Dark-general-g2-value)",
    backgroundColorHeader:"var(--Dark-general-g2-value);",
    backgroundColorMadeline:"var(--Dark-general-g4-value);"
    

  }
 
}
  return (
    <div>
        <NtvSideNav  variant={variants.dark}/>
      
    </div>
  )
}

export default page
