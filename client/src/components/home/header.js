import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import '../../css/headers.css'

const array = ['camisas', 'calças', 'ternos', 'bolsas']

const Header = () => {
  const [Data, setData] = useState()
  const history = useHistory()
  const dispatch = useDispatch()

  async function SubmitFind(e, history) {
    if (e.key === 'Enter') {
      const result = await axios.post('/api/search', { data: Data })
      dispatch({ type: 'itemSelected', data: result.data })
      history.push('/search')
    }
  }
  return (
    <div>
      <Box display="flex" justifyContent='center'>
        <Box p={2} marginRight='10%'>
          <Typography variant="h6">
            Company Shelby Limited
            </Typography>
        </Box>
        <Box p={2} className='fieldSearch'>
          <Autocomplete
            id="custom-input-demo"
            inputValue={Data}
            onInputChange={(event, newInputValue) => {
              setData(newInputValue);
            }}
            options={array}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input onKeyDown={(event) => { SubmitFind(event, history); setData(event.target.value) }} placeholder='Procurar' type="text" {...params.inputProps} />
              </div>
            )}
          />
        </Box>
        <Box p={2}>
          <Link to='/search'> <Button>Buscar</Button> </Link>
        </Box>
        <Box p={2}>
          <Link to='/listSales'> <Button>Compras</Button> </Link>
        </Box>
        <Box p={2}>
          <Link to='/login'> <Button>Login</Button> </Link>
        </Box>
        <Box p={2}>
          <Link to='/register'> <Button>Cadastre-se</Button> </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Header