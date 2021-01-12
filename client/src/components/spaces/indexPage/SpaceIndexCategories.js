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
        <div className="ui padded 4 column grid">
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
              <h6 className="label">Peace & Quiet</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[33]._id}>
              <div className="category-wrapper">
                <a href={spaces[33].image}>
                  <img key={spaces[33]._id} className="images" src={spaces[33].image} />
                </a>
              </div>
              <h6 className="label">Sports & Leisure</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[13]._id}>
              <div className="category-wrapper">
                <a href={spaces[13].image}>
                  <img key={spaces[13]._id} className="images" src={spaces[13].image} />
                </a>
              </div>
              <h6 className="label">Peace & Quiet</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[45]._id}>
              <div className="category-wrapper">
                <a href={spaces[45].image}>
                  <img key={spaces[45]._id} className="images" src={spaces[45].image} />
                </a>
              </div>
              <h6 className="label">Peace & Quiet</h6>
            </div>
          </div>
          <div className="column">
            <div className="card" key={spaces[2]._id}>
              <div className="category-wrapper">
                <a href={spaces[2].image}>
                  <img key={spaces[2]._id} className="images" src={spaces[2].image} />
                </a>
              </div>
              <h6 className="label">Peace & Quiet</h6>
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