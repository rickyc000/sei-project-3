import React from 'react'
import { getAllSpaces } from '../lib/api'
import Slider from 'react-slick'

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
    <div>
      {spaces ?
        <Slider {...settings}>
          {spaces.map(space => (
            <div className="card" key={space._id}>
              <div className="ui-card img-wrapper">
                <img key={space._id} className="images" src={space.image} />
              </div>
            </div>
          ))}
        </Slider>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🎬 '}
        </h2>
      }
    </div>

  )
}


export default SpaceIndexView