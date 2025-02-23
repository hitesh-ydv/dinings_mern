import React from 'react'
import './Header.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <div className='header'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={true} showIndicators={true} interval={3000} transitionTime={500}>
        <div>
          <img src='https://www.chefkunalkapur.com/wp-content/uploads/2024/08/lemon-coriander-noodles-1300x731.jpg?v=1723945390' alt='banner1' />
        </div>
        <div>
          <img src='https://paattiskitchen.com/wp-content/uploads/2023/04/kmc_20230401_003949-1.jpg' alt='banner2' />
        </div>
        <div>
          <img src='https://thumbs.dreamstime.com/b/generative-ai-ultra-smash-burger-real-fast-food-photos-business-concept-333483130.jpg' alt='banner3' />
        </div>
       </Carousel>
    </div>
  )
}

export default Header