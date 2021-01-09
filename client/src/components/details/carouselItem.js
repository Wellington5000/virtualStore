import React from 'react'
import Rating from '@material-ui/lab/Rating';
import img1 from '../../images/img1.jpg'

const carouselItem = () => {
  return (
    <div className="grid-item">
      <div className="image">
        <img src={img1} alt="" />
      </div>

      <div className='labelItem'>
        <div className='labelLeft'>
          <p><strong>Mochila Fantasy </strong> <br /><br /> ADIDAS </p>
        </div>

        <div className='labelRight'>
          <p><strong> 100 R$</strong></p>
          <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
        </div>
      </div>
    </div>
  )
}

export default carouselItem