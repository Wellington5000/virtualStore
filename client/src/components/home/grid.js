import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import {useDispatch} from 'react-redux'
import '../../css/grid.css'
import img1 from "../../images/img1.jpg"

//axios.get('/home').then( res => {
//aux = res.data
//})

const Grid = () => {
  const dispatch = useDispatch()

  function itemSelected(data){
    dispatch({type: 'itemSelected', data: data})
  }

  //INICIALIZA DATA COM UM ARRAY DE OBJETOS VAZIOS
  const [Data, setData] = useState([{name: '',brand: '',value: 0,description: '',rating: 0},{name: '',brand: '',value: 0, description: '', rating: 0}])

  //FAZ A CHAMADA DA API UMA ÚNICA VEZ(AO MONTAR A TELA)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {
        Data.map((data, index) =>
          <div key={index} className="grid-item">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/details'>
              <div className="image">
                <img onClick={() => itemSelected(data)} src={img1} alt="" />
              </div>
            </Link>
            <div className='labelItem'>
              <div className='labelLeft'>
                <p><strong>{data.name} </strong> <br /><br /> {data.brand} </p>
              </div>

              <div className='labelRight'>
                <p><strong> {data.value} R$</strong></p>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Grid