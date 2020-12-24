import iconInstagram from '../../images/instagram.png'
import iconPinterest from '../../images/pinterest.png'
import iconFacebook from '../../images/facebook.png'
import '../../css/icons.css'

const Icons = () => {
	return (
		<div className='icons'>
			<div><a href="https://www.instagram.com/sualojaoficialonline/?hl=pt-br"><img alt="" src={iconInstagram} /></a></div>
			<div><a href="https://www.facebook.com/Sua-loja-112496660537933/"><img alt="" src={iconPinterest} /></a></div>
			<div><a href="https://br.pinterest.com/asualojatop/_saved/"><img alt="" src={iconFacebook} /></a></div>
		</div>
	)
}

export default Icons