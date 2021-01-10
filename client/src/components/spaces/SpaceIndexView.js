import React from 'react'
import { getAllSpaces } from '../lib/api'
import Slider from 'react-slick'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox'

function SpaceIndexView() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }

  const options = {
    settings: {
      overlayColor: 'rgba(120, 120, 120, 0.5)'
    }
  }
  const [spaces, setSpaces] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)
  
  console.log(spaces)

 

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

  return (
    <SimpleReactLightbox>
      <div className="slider-container">
        <h2 className="featured-list">Featured</h2>
        {spaces ?
          <SRLWrapper options={options}>
            <Slider {...settings}>
              {spaces.map(space => (
                <div className="card" key={space._id}>
                  <div className="ui-card img-wrapper">
                    <a href={space.image}>
                      <img key={space._id} className="images" src={space.image} />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </SRLWrapper>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🎬 '}
          </h2>
        }
      </div>
    </SimpleReactLightbox>

  )
}


export default SpaceIndexView