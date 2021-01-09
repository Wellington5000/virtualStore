import React, { useState } from 'react'
import '../../css/register/register.css'
import Header from '../home/header'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import img from '../../images/backgroundRegister.jpg'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@material-ui/icons/Facebook'

const Login = () => {
  const [User, setUser] = useState({ email: '', password: '' })

  function submitForm() {
    console.log('email: ' + User.email + 'senha: ' + User.password);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  function responseFacebook(response) {
    console.log(response);
  }

  return (
    <div>
      <Header />

      <div className='registerPanel'>
        <div className='imageRegister'><img src={img} alt="" /></div>
        <div className='formRegister'> <Typography variant='h6'>Login</Typography>
          <TextField onChange={event => setUser({ email: event.target.value })} style={{ width: '20vw' }} id="standard-basic" label="Email" /><br />
          <TextField onChange={event => setUser({ password: event.target.value })} style={{ width: '20vw' }} id="standard-basic" label="Senha" type='password' />
          <input onClick={submitForm} id='btnRegister' value='Cadastrar' type="submit" />
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <FacebookLogin
            tag='p'
            textButton="Facebook"
            appId="1088597931155576"
            fields="name,email,picture"
            onSuccess={responseFacebook}
            size='small'
            icon={<FacebookIcon />}
          />
        </div>
      </div>
    </div>
  )
}

export default Login