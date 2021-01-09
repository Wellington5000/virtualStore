import Header from './header'
import Slider from './slider'
import Icons from './icons'
import Div1 from './div1'
import Grid from './grid'
import Div2 from './div2'
import Footer from './footer'
import SubGrid from './subGrid'
import HeaderAux from './headerAux'

const Home = () => {
  return (
    <div>
      <HeaderAux />
      <Slider />
      <Icons />
      <SubGrid />
      <Div1 />
      <Grid />
      <Div2 />
      <Footer />
    </div>
  )
}

export default Home