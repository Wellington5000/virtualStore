import '../../css/subGrid.css'
import img1 from '../../images/camisas.jpg'
import img2 from '../../images/ternos.jpg'
import img3 from '../../images/sapatos.jpg'
import img4 from '../../images/chapeus.jpg'
import img5 from '../../images/calças.jpg'

const subGrid = () => {
  return (
    <div className='subGrid'>
      <div className='item1'>
        <img src={img1} alt=""/>
        <br/>
        <label htmlFor="item1">T-SHIRTS</label>
      </div>

      <div className='item2'>
        <img src={img2} alt=""/>
        <br/>
        <label htmlFor="item2">TERNOS</label>
      </div>

      <div className='item3'>
        <img src={img3} alt=""/>
        <br/>
        <label htmlFor="item3">SAPATOS</label>
      </div>

      <div className='item4'>
        <img src={img4} alt=""/>
        <br/>
        <label htmlFor="item4">CHAPEÚS</label>
      </div>

      <div className='item5'>
        <img src={img5} alt=""/>
        <br/>
        <label htmlFor="item5">CALÇAS</label>
      </div>
    </div>
  )
}

export default subGrid