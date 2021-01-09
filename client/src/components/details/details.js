import RecomendationItems from './recomendationItems'
import Footer from '../home/footer'
import Div2 from '../home/div2'
import Header from '../home/header'
import DetailItem from './detailItem'

import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
  var data = useSelector(state => state.data)
  return (
    <div className='divMain'>
      <Header />
      <DetailItem data={data} />
      <RecomendationItems data={{category: data.category, title: 'Produtos Semelhantes'}}/>
      <RecomendationItems data={{category: data.category, title: 'Quem viu este produto também comprou'}}/>
      <Div2 />
      <Footer/>
    </div>
  )
}

export default Details