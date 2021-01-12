import React from 'react'
import { Link } from 'react-router-dom'

import SpaceSlider from './indexPage/SpaceSlider.js'
import SpaceIndexCategories from './indexPage/SpaceIndexCategories'
function SpaceIndexView() {

  return (
    <>
      <SpaceSlider />
      <h2 className="featured-list">Recommended for You</h2>
      <Link to='/spaces'>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i aria-hidden="true" className="pdf file outline icon"></i>
          Map View Container link Goes here
          </div>
          <button className="ui primary button">Take Me There</button>
        </div>
      </Link>
      <SpaceIndexCategories />
    </>
  )
}
export default SpaceIndexView