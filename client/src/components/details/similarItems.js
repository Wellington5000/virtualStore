import React, { useEffect } from 'react'
import Rating from '@material-ui/lab/Rating';
import axios from 'axios'
import Whirligig from 'react-whirligig'

import img1 from '../../images/img3.jpg'
import '../../css/details/similarItems.css'

const SimilarItems = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post('/api/similar', { category: props.data.category });
      console.log(result);
    };
    fetchData();
  }, []);

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className='carousel'>
      <button onClick={prev}>Prev</button>
      <Whirligig
        animationDuration={2000}
        visibleSlides={4}
        gutter="1em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
      >
        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className='labelItem'>
            <div className='labelLeft'>
              <p><strong>100 </strong> <br /><br /> ADIDAS </p>
            </div>

            <div className='labelRight'>
              <p><strong> 100 R$</strong></p>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            </div>
          </div>
        </div>

      </Whirligig>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default SimilarItems