import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import {useDispatch} from 'react-redux'
import '../../css/grid.css'
const images = require.context('../../images', true)

const Grid = (props) => {
  const dispatch = useDispatch()

  function itemSelected(data){
    dispatch({type: 'itemSelected', data: data})
  }

  return (
    <div>
      <div className="grid-container">
      {
        props.data.map((data, index) =>
          <div key={index} className="grid-item">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/details'>
              <div className="image">
                <img onClick={() => itemSelected(data)} src={images('./' + data.images[0]).default} alt="" />
              </div>
            </Link>
            <div className='labelItem'>
              <div className='labelLeft'>
                <p><strong>{data.name} </strong> <br /><br /> {data.brand} </p>
              </div>

              <div className='labelRight'>
                <p><strong> {data.value} R$</strong></p>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
              </div>
            </div>
          </div>
        )
      }
    </div>
    </div>
  )
}

export default Grid

