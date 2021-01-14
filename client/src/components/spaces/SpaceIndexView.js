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


function SpaceIndexView() {


  const isLoggedIn = isAuthenticated()



  
  return (

    <>


      
      <WelcomeBanner />
      

      <SpaceSlider />
   
      { isLoggedIn &&
        <ReccomendedSlider 
        />
      }
      <div className="mapbox-wrapper">
        <SpaceIndexMap />
      </div>
      <SpaceIndexCategories />
      <footer className="footer">
        <p>&copy; CitySpace </p>
      </footer>


    </>
  )

  
}
export default SpaceIndexView