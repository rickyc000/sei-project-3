import React from 'react'
import { getAllSpaces } from '../lib/api'
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
    console.log(category)
    return spaces.filter(space => {
      return space.tags.includes(category)
    })
  }

  const selectedCategory = (e) => {
    const value = e.target.innerHTML.replace('&amp;', '&')
    setActiveCategory(value)
  }

  const categoryList = [
    'Riverside Spot',
    'Architecture',
    'Art & Design',
    'Food & Drink',
    'Peace & Quiet',
    'Lively',
    'Mother Nature',
    'Sports & Leisure'
  ]

  filterSpaces(category)
  console.log(activeCategory)
  return (
    <section>
      <div
        className="category-page-tags"
        onClick={(e) => selectedCategory(e)}>
        {categoryList.map(categoryTag => (
          <Link
            key={categoryTag}
            to={`/spaces/category/${categoryTag}`}>
            <div
              className={activeCategory === categoryTag
                ? 'ui olive label' : 'ui label'}>{categoryTag}</div>
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
                  {/* <div> */}
                  <img src={space.image} />
                  {/* </div> */}
                </div>
                <div className="content category-card-content">
                  <div className="header">
                    {space.name}
                  </div>
                  <div className="category-card-favourite">
                    <a className="ui image label yellow">
                      <Icon name="heart" />
                      {space.favouritedBy.length}
                    </a>
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