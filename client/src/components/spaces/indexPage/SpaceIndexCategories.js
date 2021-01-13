import React from 'react'
// import { Link } from 'react-router-dom'
import { getAllSpaces } from '../../lib/api'


function SpaceIndexCategories() {

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

  return (
    <>
      <h2 className="featured-list">Go To Any Space</h2>
      {spaces ?
        <div className="categories-wrapper">
          <div className="column">
            <div className="card" key={spaces[9]._id}>
              <div className="category-wrapper">
                <a href={spaces[9].image}>
                  <img key={spaces[9]._id} className="images" src={spaces[9].image} />
                </a>
              </div>
              <h6 className="label">Sports & Leisure</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[18]._id}>
              <div className="category-wrapper">
                <a href={spaces[18].image}>
                  <img key={spaces[18]._id} className="images" src={spaces[18].image} />
                </a>
              </div>
              <h6 className="label">Peace & Quiet</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[44]._id}>
              <div className="category-wrapper">
                <a href={spaces[44].image}>
                  <img key={spaces[44]._id} className="images" src={spaces[44].image} />
                </a>
              </div>
              <h6 className="label">Peace & Quiet</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[6]._id}>
              <div className="category-wrapper">
                <a href={spaces[6].image}>
                  <img key={spaces[6]._id} className="images" src={spaces[6].image} />
                </a>
              </div>
              <h6 className="label">Riverside Spot</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[27]._id}>
              <div className="category-wrapper">
                <a href={spaces[27].image}>
                  <img key={spaces[27]._id} className="images" src={spaces[27].image} />
                </a>
              </div>
              <h6 className="label">Lively</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[13]._id}>
              <div className="category-wrapper">
                <a href={spaces[13].image}>
                  <img key={spaces[13]._id} className="images" src={spaces[13].image} />
                </a>
              </div>
              <h6 className="label">Architecture</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[12]._id}>
              <div className="category-wrapper">
                <a href={spaces[12].image}>
                  <img key={spaces[12]._id} className="images" src={spaces[12].image} />
                </a>
              </div>
              <h6 className="label">Food & Drink</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[36]._id}>
              <div className="category-wrapper">
                <a href={spaces[27].image}>
                  <img key={spaces[1]._id} className="images" src={spaces[1].image} />
                </a>
              </div>
              <h6 className="label">Art & Design</h6>
            </div>
          </div>
        </div>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🎬 '}
        </h2>
      }
    </>
  )
}
export default SpaceIndexCategories