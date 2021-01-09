import React from 'react'

import BoxAdress from './boxAdress'
import BoxInfoProduct from './boxInfoProduct'
import '../../css/sale/confirmSale.css'
import Header from '../home/header'

const ConfirmSale = () => {

  return (
    <div className='confirmSale'>
      <Header />
      <BoxAdress />
      <BoxInfoProduct />
      <div className='btnSale'>
        <input id='btnCancelSale' value='CANCELAR' type="button" />
        <input id='btnContinueSale' value='CONTINUAR' type="button" />
      </div>
    </div>
  )
}

export default ConfirmSale
