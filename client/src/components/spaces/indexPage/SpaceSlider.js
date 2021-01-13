import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import SimpleReactLightbox from 'simple-react-lightbox'
// import { SRLWrapper } from 'simple-react-lightbox'
import { getAllSpaces } from '../../lib/api'

function SpaceSlider() {

  const [spaces, setSpaces] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getSpaces = async () => {
      try {
        const { data } = await getAllSpaces()
        setSpaces(data)

      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getSpaces()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }

  // const options = {
  //   settings: {
  //     overlayColor: 'rgba(120, 120, 120, 0.5)'
  //   }
  // }

  return (
    <SimpleReactLightbox>
      <div className="ui segment slider-container">
        <h2 className="featured-list">Featured</h2>
        {spaces ?
          // <SRLWrapper options={options}>
          <Slider {...settings}>
            {spaces.map(space => (
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
      </div>
    </SimpleReactLightbox >
  )
}


export default SpaceSlider