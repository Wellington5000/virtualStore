import React, { useEffect } from 'react'
import axios from 'axios'
import Whirligig from 'react-whirligig'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';

import '../../css/details/similarItems.css'
import CarouselItem from './carouselItem'

const SimilarItems = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post('/api/similar', { category: props.data.category });
      console.log(result);
    };
    fetchData();
  }, []);

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className='recomendationItems'>
      <Typography variant="h6">
        {props.data.title}
      </Typography>
      <div className='carousel'>
        <IconButton style={{ color: 'black' }} onClick={prev} aria-label="delete">
          <ArrowBackIosIcon />
        </IconButton>

        <Whirligig
          animationDuration={2000}
          visibleSlides={4}
          gutter="1em"
          ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
        >
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Whirligig>

        <IconButton style={{ color: 'black' }} onClick={next} aria-label="delete">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default SimilarItems