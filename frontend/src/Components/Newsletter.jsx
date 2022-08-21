import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/newsletter.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Newsletter = () => {
  return (
    <div className='n-container'>
        <div className="new-col">
            <h2 className='new-title'>Newsletter</h2>
            <p className='new-desc'>Get Timely Updates From Your Favorite Products.</p>
            <div className="input-container">
                <input type = 'text' placeholder = 'Your Email' />
                <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>

    </div>
  )
}

export default Newsletter