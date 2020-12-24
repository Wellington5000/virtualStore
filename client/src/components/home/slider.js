import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import '../../css/slider.css'
import '../../css/slider2.css'

const Slider = () => {
  return (
    <div className="gallery autoplay items-5">
      <div id="item-1" className="control-operator"></div>
      <div id="item-2" className="control-operator"></div>
      <div id="item-3" className="control-operator"></div>
      <div id="item-4" className="control-operator"></div>
      <div id="item-5" className="control-operator"></div>

      <figure className="item">
        <img src={img1} alt=""/>
      </figure>

      <figure className="item">
        <img src={img2} alt=""/>
      </figure>

      <figure className="item">
        <img src={img3} alt=""/>
      </figure>

      <figure className="item">
        <img src={img4} alt=""/>
      </figure>

      <figure className="item">
        <img src={img5} alt=""/>
      </figure>

      <div className="controls">
        <a href="#item-1" className="control-button">.</a>
        <a href="#item-2" className="control-button">.</a>
        <a href="#item-3" className="control-button">.</a>
        <a href="#item-4" className="control-button">.</a>
        <a href="#item-5" className="control-button">.</a>
      </div>
    </div>
  )
}

export default Slider