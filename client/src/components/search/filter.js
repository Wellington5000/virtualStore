import React from 'react'
import '../../css/search/filter.css'
import Typography from '@material-ui/core/Typography';

const Filter = () => {
  return (
    <div className='filter'>
      <div className='itemsFilter'>
        <Typography variant='h5' style={{ marginTop: '5%' }}> Mochilas </Typography>

        <div className='genre'>
          <strong> Gênero </strong>
          <p>Masculino</p>
          <p>Feminino</p>
        </div>

        <div className='aux'>
          <strong> Marca </strong>
          <p>Gulcci</p>
          <p>Prada</p>
        </div>

        <div className='aux'>
          <strong> Valor </strong>
          <p>Maior</p>
          <p>Menor</p>
        </div>
      </div>
    </div>
  )
}

export default Filter