import React from 'react'

import Header from '../home/header'
import ListSalesItem from './listSalesItem'

const ListSales = () => {
  return (
    <div>
      <Header/>
      <ListSalesItem/>
      <ListSalesItem/>
      <ListSalesItem/>
    </div>
  )
}

export default ListSales