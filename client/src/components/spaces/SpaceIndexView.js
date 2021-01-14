import React from 'react'
// import { Link } from 'react-router-dom'
// import Slider from 'react-slick'

import SpaceSlider from './indexPage/SpaceSlider'
import ReccomendedSlider from './ReccomendedSlider'
import SpaceIndexCategories from './indexPage/SpaceIndexCategories'
import WelcomeBanner from './WelcomeBanner'
// import { getUserProfile, headers } from '../lib/api'
import SpaceIndexMap from './indexPage/SpaceIndexMap'
import { isAuthenticated } from '../lib/auth'
import { Container } from 'semantic-ui-react'


function SpaceIndexView() {
  const isLoggedIn = isAuthenticated()

  return (

    <>


      <Container>
        <WelcomeBanner />
      
        <div className="homepage-slider-section">
          <SpaceSlider />
        </div>
      
   
        {/* { isLoggedIn &&
        <ReccomendedSlider 
        />
      } */}
      


        <h4 className="featured-list">Browse Map</h4>
        <div className="mapbox-wrapper">
          <SpaceIndexMap />
        </div>
        { isLoggedIn &&
        <ReccomendedSlider
        />
        }
        <SpaceIndexCategories />
        <footer className="footer">
          <p>&copy; CitySpace </p>
        </footer>
      </Container>


    </>
  )


}
export default SpaceIndexView