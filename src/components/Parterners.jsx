import React from 'react'
import AutoPlaySlider from './AutoPlaySlider'

function Parterners() {
  return (
    <div className='clients'>
        <div className='client text'>
            <h4>Over the years we have worked with</h4>
            <p>We have been there for our clients every step of the way</p>
        </div>
        <div className='client logos'>
            <AutoPlaySlider/>
        </div>
    </div>
  )
}

export default Parterners