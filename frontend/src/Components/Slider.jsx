import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import '../styles/slider.css'
import { sliderItems } from '../data'
import axios from 'axios';
import { useEffect } from 'react'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction == "left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)

        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            }

    }

    const [slider, setSlider] = useState([])

    useEffect(() =>{
      const fetchData = async () => {
        const result = await axios.get('/api/slider');
        setSlider(result.data);
    }
    fetchData();
  }, []);
  return (
    <div className='s-container'>
        <div className="s-arrow left" onClick={() => handleClick("left")}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
        </div>

        <div className="wrapper" slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>

             {sliderItems.map((item) => (
                 <div className="slide" key={item._id}>
                    <div className="img-container">
                        <img src={item.image} className='s-img' alt='' />
                     </div>
                </div>
            
                        
            ))}


        </div>
        <div className="s-arrow right" onClick={() => handleClick("right")}>
            <FontAwesomeIcon icon={faArrowCircleRight} />

        </div>

    </div>
  )
}

export default Slider