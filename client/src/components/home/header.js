import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import React from 'react'

const Header = () => {
	return (
		<div style={{ width: '100%' }}>
        <Box display="flex" justifyContent='center'>
          <Box p={2} marginRight = '30%'>
            <Typography variant="h6">
              Company Shelby Limited
            </Typography>
          </Box>
          <Box p={2}>
            <Button>Loja</Button>
          </Box>
          <Box p={2}>
            <Button>Sobre</Button>
          </Box>
          <Box p={2}>
            <Button>Ofertas</Button>
          </Box>
          <Box p={2}>
            <Button>Contato</Button>
          </Box>
        </Box>
      </div>
	)
}

export default Header