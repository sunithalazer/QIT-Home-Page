import React from 'react'
import Header from './Header'
function Rows() {
  return (
    <div>
       <div className='row head'><Header/></div>
      <div className='row abt'>row2</div>
      <div className='row stw'>row3</div>
      <div className='row pdt'>row4</div>
      <div className='row abt'>row5</div>
      <div className='row cont'>row6</div>
      <div className='row foot'>row7</div>
    </div>
  )
}

export default Rows;