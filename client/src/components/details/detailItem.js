import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import '../../css/details/details.css'
import img1 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
const images = require.context('../../images', true)

const DetailItem = (props) => {
  const [imageSelected, setImageSelected] = useState(props.data.images[0])
  console.log(imageSelected);
  return (
    <div className='details'>
      <div className='imgProduct'>
        <img src={images('./' + imageSelected).default} alt="" />

        <div className='subImageProduct'>
          { 
            props.data.images.map((image, index) =>
              <img onClick={() => setImageSelected(image)} key={index} src={images('./' + image).default} alt="" />
            )
          }
        </div>
      </div>

      <div className='infoProduct'>
        <Typography variant="h6">
          {props.data.name} <br />
              R$ {props.data.value}
        </Typography>

        <div className='comboBox'>
          <label htmlFor="size">TAMANHO</label>
          <select name="size" id="size">
            {props.data.sizes.map((size, index) =>
              <option key={index} value="small">{size}</option>
            )}
          </select>
        </div>

        <div className='amount'>
          <label htmlFor="amount">QUANTIDADE</label>
          <input name='amount' defaultValue='1' type="number" />
        </div>

        <Link to='/confirmSale'> <input id='btnPurchase' value='COMPRAR' type="submit" /> </Link>
        <input id='btnAddCart' value='ADICIONAR AO CARRINHO' type="button" />

        <div className='descriptionProduct'>
          <span>INFORMAÇÕES DO PRODUTO</span>
          <p>
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailItem