import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import SpaceSlider from './indexPage/SpaceSlider.js'
import SpaceIndexCategories from './indexPage/SpaceIndexCategories'
import { getUserProfile, headers, getAllSpaces } from '../lib/api'
import SpaceIndex from '../spaces/SpaceIndex'

function SpaceIndexView() {

  const [profile, setProfile] = React.useState({})
  const [spaces, setSpaces] = React.useState([])
  const recommendedSpaces = []
  const [hasError, setHasError] = React.useState(false)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }


  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        setProfile(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getProfile()
  }, [])

  React.useEffect(() => {
    const getSpaces = async () => {
      try {
        const { data } = await getAllSpaces()
        setSpaces(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSpaces()
  }, [])
  console.log(spaces)

  const addRecommendedSpaces = () => {
    if (profile.favouriteTags) {
      for (let i = 0; i <= profile.favouriteTags.length; i++) {
        const filterSpaces = () => spaces.filter(space => {
          if (space.tags.includes(profile.favouriteTags[i])) {
            return recommendedSpaces.push(space)
          }
        })
        filterSpaces()
      }
    }
  }
  addRecommendedSpaces()

  console.log(recommendedSpaces)

  return (
    <>
      <SpaceSlider />
      <h2 className="featured-list">{`Recommended for ${profile.username}`}</h2>
      <div className="user-tags">
        {profile.favouriteTags ?
          profile.favouriteTags.map(categoryTag => (
            <Link
              key={categoryTag}
              to={`/spaces/category/${categoryTag}`}>
              <div
                className="user-label-tags">{categoryTag}</div>
            </Link>
          ))
          :
          <p>...loading</p>
        }
      </div>
      <div>

      </div>
      {spaces ?
        // <SRLWrapper options={options}>
        <Slider {...settings}>
          {recommendedSpaces.map(space => (
            <div className="card" key={space._id}>
              <div className="ui-card img-wrapper">
                <Link to={`/spaces/${space._id}`}>
                  <img key={space._id} className="images" src={space.image} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        // </SRLWrapper>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🎬 '}
        </h2>
      }
      <div className="mapbox-wrapper">
        <SpaceIndex />
      </div>
      <SpaceIndexCategories />
    </>
  )
}
export default SpaceIndexView