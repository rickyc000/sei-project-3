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

  const [spaces, setSpaces] = React.useState([])
  console.log(spaces)

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

  return (
    <div>
      <Slider {...settings}>
        <img src={spaces[0].image} className="ui small image"/>
        <img src={spaces[1].image} className="ui small image"/>
        <img src={spaces[2].image} className="ui small image"/>
        <img src={spaces[3].image} className="ui small image"/>
        <img src={spaces[4].image} className="ui small image"/>
        <img src={spaces[5].image} className="ui small image"/>
        <img src={spaces[6].image} className="ui small image"/>
      </Slider>
    </div>
  )
}



export default SpaceIndexView