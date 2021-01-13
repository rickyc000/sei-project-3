import React from 'react'
import { getAllSpaces } from '../lib/api'
// import { getUserId } from '../lib/auth'
import { Icon } from 'semantic-ui-react'
import { useParams, Link } from 'react-router-dom'

function SpaceCategoriesView() {

  const [spaces, setSpaces] = React.useState([])
  const [activeCategory, setActiveCategory] = React.useState(useParams().category)

  useParams()
  const { category } = useParams()

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

  const filterSpaces = (category) => {
    if (category === 'View All') {
      return spaces
    } else {
      return spaces.filter(space => {
        return space.tags.includes(category)
      })
    }
  }

  const selectedCategory = (e) => {
    const value = e.target.innerHTML.replace('&amp;', '&')
    setActiveCategory(value)
  }

  const categoryList = [
    'View All',
    'Architecture',
    'Art & Design',
    'Food & Drink',
    'Lively',
    'Mother Nature',
    'Peace & Quiet',
    'Riverside Spot',
    'Sports & Leisure'
  ]

  filterSpaces(category)

  // Favourites and Add Favourites

  // const [isFavourite, setIsFavourite] = React.useState(false)
  // const [favourites, setFavourites] = React.useState(0)

  // const handleFavourite = async event => {
  //   event.preventDefault()
  //   try {
  //     const spaceId = event.target.value
  //     await addToFavourites(spaceId)
  //     setIsFavourite(!isFavourite)
  //     setFavourites(favourites + 1)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // //* Add to the users favourites


  // const handleUnFavourite = async event => {
  //   event.preventDefault()
  //   try {
  //     setIsFavourite(!isFavourite)
  //     setFavourites(favourites - 1)
  //     const spaceId = event.target.value
  //     await removeFromFavourites(spaceId)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // //* Add to the users favourites
  // }

  // const favouriteSpaces = []

  // const hasUserFavourited = () => {
  //   spaces.forEeach(space => {
  //     if (space.favouritedBy.includes(getUserId())) {
  //       favouriteSpaces.push(space)
  //     }
  //   })
  // }


  // const isItAFavourite = (space) => {
  //   if (favouriteSpaces.includes(space)) {
  //     return true
  //   }
  // }









  return (
    <section>
      <div
        className="category-page-tags"
        onClick={(e) => selectedCategory(e)}>
        {categoryList.map(categoryTag => (
          <Link
            key={categoryTag}
            to={`/spaces/category/${categoryTag}`}
            className="category-tag">
            <div className="category-tag">
              <div
                className={activeCategory === categoryTag
                  ? 'ui olive label category-tag' : 'ui label category-tag'}>{categoryTag}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="ui divider">
      </div>

      <div>
        {spaces ?
          <div className="category-card-wrapper ui cards">
            {filterSpaces(category).map((space =>
              <div key={space.name} className="ui card category-card">
                <div className="image-card-wrapper">
                  <Link
                    to={`/spaces/${space._id}`}
                    key={space.name}>
                    <img className="category-card-image"src={space.image} />
                  </Link>
                </div>
                <div className="content category-card-content">
                  <div className="header category-card-header">
                    {space.name}
                  </div>
                  <div className="category-card-info">
                    <div className="category-card-favourite">
                      {/* {isItAFavourite(space) ? 
                        <button value={space._id} onClick={handleFavourite} className="ui button blue">

                          <Icon name="heart" />
                          {space.favouritedBy.length}
                        
                        </button>
                        :
                        <button value={space._id} onClick={handleUnFavourite} className="ui button yellow">

                          <Icon name="heart outline" />
                          {space.favouritedBy.length}
                        
                        </button>
                      } */}
                      <Link to={`/spaces/${space._id}`}>
                        <a value={space._id} className="ui button yellow">

                          <Icon name="heart" />
                          {space.favouritedBy.length}

                        </a>
                      </Link>

                      <Link
                        to={`/spaces/${space._id}`}
                        key={space.name}>
                        <div className="ui label">
                          More info
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          :
          <div>Loading</div>
        }
      </div>
    </section >
  )
}

export default SpaceCategoriesView