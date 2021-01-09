import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import imgPostman from '../../images/postman.png'
import '../../css/sale/boxAdress.css'

const BoxAdress = () => {
  const [User, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '', adress: '', city: '', state: '', district: '', number: '' })
  const [isButtonActive, setState] = useState(true)
  
  function changeState(){
    setState(!isButtonActive)
    console.log(isButtonActive);
  }

  return (
    <div>
      <Typography className='subTitle'> Confirmação de Endereço </Typography>
      <div className='boxAdress'>
        <div className='boxAdressItems'>
          <TextField disabled={isButtonActive} onChange={event => setUser({ adress: event.target.value })} style={{ marginTop: '7%', width: '20vw' }} id="standard-basic" label="Endereço" /><br />
          <TextField disabled={isButtonActive} onChange={event => setUser({ city: event.target.value })} style={{ width: '8vw' }} id="standard-basic" label="Cidade" />
          <TextField disabled={isButtonActive} onChange={event => setUser({ state: event.target.value })} style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Estado" /><br />
          <TextField disabled={isButtonActive} onChange={event => setUser({ district: event.target.value })} style={{ width: '8vw' }} id="standard-basic" label="Bairro" />
          <TextField disabled={isButtonActive} onChange={event => setUser({ number: event.target.value })} style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Número" />
          <p id='btnChange' onClick={() => changeState()}>ALTERAR</p>
        </div>
        <div className='imageBoxAdress'>
          <img src={imgPostman} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BoxAdress