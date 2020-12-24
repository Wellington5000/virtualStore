import img1 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import '../../css/details/details.css'
import SimilarItems from './similarItems'
import Footer from '../home/footer'

import Header from '../home/header'
import Typography from '@material-ui/core/Typography';
import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
  var data = useSelector(state => state.data)
  return (
    <div className='divMain'>
      <Header />
      <div className='details'>
        <div className='imgProduct'>
          <img src={img1} alt="" />

          <div className='subImageProduct'>
            <img src={img1} alt="" />
            <img src={img3} alt="" />
            <img src={img1} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>

        <div className='infoProduct'>
          <Typography variant="h6">
            {data.name} <br />
              R$ {data.value}
          </Typography>

          <div className='comboBox'>
            <label htmlFor="size">TAMANHO</label>
            <select name="size" id="size">
             { data.sizes.map((size, index) =>
                <option key={index} value="small">{size}</option>
              )}
            </select>
          </div>

          <div className='amount'>
            <label htmlFor="amount">QUANTIDADE</label>
            <input name='amount' defaultValue='1' type="number" />
          </div>

          <input id='btnPurchase' value='COMPRAR' type="submit" />
          <input id='btnAddCart' value='ADICIONAR AO CARRINHO' type="button" />

          <div className='descriptionProduct'>
            <span>INFORMAÇÕES DO PRODUTO</span>
            <p>
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <SimilarItems data={data}/>
      <Footer/>
    </div>
  )
}

export default Details