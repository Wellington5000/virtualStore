import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../../css/listSale/listSaleItem.css'
import img from '../../images/img1.jpg'


const ListSalesItem = () => {
  return (
    <div className='listSalesItem'>
      <Typography style={{padding: '10px'}}>AGUARDANDO PAGAMENTO</Typography>
      <div className='detailSale'>
        <div className='imgSale'> 
          <img src={img} alt=""/>
        </div>

        <div className='infoSale'>
          <strong><p>Mochila Fantasy</p></strong>
          <p>Quantidade: 2</p>
          <p>Valor: 120</p>
          <p>Data da compra: 25/12/2020</p>
        </div>
        <p id='btnCancelSale'>Acompanhar Envio</p>
        <p id='btnCancelSale'>Cancelar</p>
      </div>
    </div>
  )
}

export default ListSalesItem