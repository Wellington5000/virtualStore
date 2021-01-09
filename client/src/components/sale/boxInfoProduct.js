import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import imgPostman from '../../images/postman.png'
import '../../css/sale/boxAdress.css'

import '../../css/sale/boxInfoProduct.css'
const BoxInfoProduct = () => {
  return (
    <div>
      <Typography className='subTitle'> Confirmação de Produto </Typography>
      <div className='boxAdress'>
        <div className='boxAdressItems'>
          <TextField disabled style={{ marginTop: '7%', width: '20vw' }} id="standard-basic" label="Produto" /><br />
          <TextField disabled style={{ width: '8vw' }} id="standard-basic" label="Tamanho" />
          <TextField disabled style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Quantidade" /><br />
          <TextField disabled style={{ width: '8vw' }} id="standard-basic" label="Frete" />
          <TextField disabled style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Valor a pagar" />
        </div>
        <div className='imageBoxAdress'>
          <img src={imgPostman} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BoxInfoProduct