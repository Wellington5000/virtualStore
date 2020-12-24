import '../../css/div1.css'
import Typography from '@material-ui/core/Typography';

const Div1 = () => {
  return (
    <div className='div1'>
      <div id='row1'></div>
      <div id='labelDiv1'>
        <Typography>
          ITENS EM DESTAQUE
        </Typography>
      </div>
      <div id='row2'></div>
    </div>
  )
}

export default Div1