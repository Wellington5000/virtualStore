import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import img from '../../images/backgroundRegister.jpg'

const FormRegister = () => {
  const [User, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '', adress: '', city: '', state: '', district: '', number: '' })
  function submitForm() {
    console.log('Usuário: ' + User.email);
  }
  return (
    <div className='registerPanel'>
      <div className='imageRegister'><img src={img} alt="" /></div>
        <div className='formRegister'> <Typography variant='h6'>Register</Typography>
        <TextField onChange={event => setUser({ name: event.target.value })} style={{ width: '20vw' }} id="standard-basic" label="Nome Completo" /><br />
        <TextField onChange={event => setUser({ email: event.target.value })} style={{ width: '20vw' }} id="standard-basic" label="Email" /><br />
        <TextField onChange={event => setUser({ password: event.target.value })} style={{ width: '8vw' }} id="standard-basic" label="Senha" type='password' />
        <TextField onChange={event => setUser({ confirmPassword: event.target.value })} style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Confirmar Senha" type='password' /><br /><br />
        <TextField onChange={event => setUser({ adress: event.target.value })} style={{ width: '20vw' }} id="standard-basic" label="Endereço" /><br />
        <TextField onChange={event => setUser({ city: event.target.value })} style={{ width: '8vw' }} id="standard-basic" label="Cidade" />
        <TextField onChange={event => setUser({ state: event.target.value })} style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Estado" /><br />
        <TextField onChange={event => setUser({ district: event.target.value })} style={{ width: '8vw' }} id="standard-basic" label="Bairro" />
        <TextField onChange={event => setUser({ number: event.target.value })} style={{ marginLeft: '20%', width: '8vw' }} id="standard-basic" label="Número" />
        <input onClick={submitForm} id='btnRegister' value='Cadastrar' type="submit" />
      </div>
    </div>
  )
}
export default FormRegister