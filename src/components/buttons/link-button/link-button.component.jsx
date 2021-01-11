import React from 'react'

import { Link } from 'react-router-dom'

import underline from "../../../assets/image/Underline.png";
import './link-button.styles.scss'

const Button = ( { section } ) => {
  let url =  section.toString().toLowerCase().replace(" '", "").split(' ').join('-') 
  
  return(
    <div className={`button link-button ${url}-button`}>
      <Link to={`/${url}`}>
        <p className="link">{section}</p>
        <img src={underline} alt=""></img>
      </Link>
    </div>
  )
}

export default Button