import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { getAllSpaces } from '../lib/api'



function SimilarPlacesSlider ({ space }) {

  // const { id } = useParams()
  const recommendedSpaces = []
  const [spaces, setSpaces] = React.useState([])
  // const [hasError, setHasError] = React.useState(false)
  

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }

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
  // console.log(spaces)




  const addRecommendedSpaces = () => {
    if (space.tags) {
      for (let i = 0; i <= spaces.length; i++) {
        const filterSpaces = () => spaces.filter(item=> {
          if (item.tags.includes(space.tags[0])) {
            return recommendedSpaces.push(item)
          }
        })
        filterSpaces()
      }
    }
  }
  addRecommendedSpaces()

  // console.log(recommendedSpaces)

  // filter spaces
  // if the spaces have favourite tags 

  



  return (
    <>
      <h2 className="featured-list">{'Similar Places'}</h2>
      {spaces ?
      // <SRLWrapper options={options}>
        <Slider {...settings}>
          {recommendedSpaces.map(item => (
            <Link to={`/spaces/${item._id}`} key={item._id}>
              <div>
                <div className="card">
                  <div className="ui-card img-wrapper">
                
                
                    <img key={item._id} className="images" src={item.image} />
                
                  </div>
            
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      // </SRLWrapper>
        :
        <h2 className="title has-text-centered">
          ...Loading
        </h2>
      }
    </>
  )
}

export default SimilarPlacesSlider