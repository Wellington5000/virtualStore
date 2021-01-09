import React from 'react'
import { useSelector } from 'react-redux' 

import GridSearch from './gridSearch'
import Header from '../home/header'
import Filter from './filter'
import '../../css/search/search.css'

const Search = () => {
  let data = useSelector(state => state.data)
  return (
    <div>
      <Header />
      <div className='bodySearch'>
        <Filter />
        <GridSearch data={data} />
      </div>
    </div>
  )
}

export default Search