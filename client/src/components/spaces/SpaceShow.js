import React from 'react'
import { getSingleSpace, addToFavourites } from '../lib/api'
import { useParams, useLocation, Link } from 'react-router-dom'
import SpaceShowMap from './SpaceShowMap'
// import { Menu } from 'semantic-ui-react'

import {
  // Button,
  Container,
  Icon
} from 'semantic-ui-react'

function SpaceShow() {

  const [isFavourite, setIsFavourite] = React.useState(false)

  useLocation()

  const [space, setSpace] = React.useState([])
  const { id } = useParams()
  console.log(id)


  React.useEffect(() => {
    const getSpace = async () => {
      try {
        const { data } = await getSingleSpace(id)
        setSpace(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSpace()
  }, [id])

  const handleFavourite = async event => {
    event.preventDefault()
    try {
      await addToFavourites(id)
      setIsFavourite(!isFavourite)
      console.log('Add to Favourites')
    } catch (err) {
      console.log(err)
    }
    //* Add to the users favourites
  }

  // const [activeTab, setActiveTab] = React.useState({ activeItem: 'image' })

  const [photoTab, setPhotoTab] = React.useState(true)
  const handlePhotoTab = () => {
    setPhotoTab(!photoTab)
    console.log('photo tab')
  }


  // Mapbox Functions:
  // const [viewport, setViewport] = React.useState({
  //   latitude: 51.502643,
  //   longitude: -0.07497,
  //   zoom: 12
  // })


  return (

    <Container>
      {space
        ?
        <div>
          <div className="showpage-wrapper">
            <h1>{space.name}</h1>
            <div className="showpage-main-content">
              <div className="photo-map-tabs-wrapper">
                <div className="ui attached tabular menu">
                  <div className={photoTab ? 'active item' : 'item'}>
                    <div onClick={handlePhotoTab}> Photo </div>
                  </div>
                  <div className={photoTab ? 'item' : 'active item'}>
                    <div onClick={handlePhotoTab}> Map </div>
                  </div>
                </div>
                {photoTab ?
                  <div className="ui bottom attached segment active tab">
                    <img src={space.image} className="ui large rounded image"></img>
                  </div>
                  :
                  <div className="ui bottom attached segment active tab">
                    <div className="showpage-map-wrapper">
                      <SpaceShowMap space={space} />
                    </div>
                  </div>
                }
              </div>
              <div className="showpage-info-wrapper">
                <div className="showpage-text-wrapper">
                  <p>{space.description}</p>
                  <div>
                    <a className="ui image label">
                      <Icon name="user circle" />
                      Added by {space.owner ? space.owner.username : ''}
                    </a>
                  </div>

                  <div>
                    {space.tags ?
                      <div>
                        {space.tags.map(tag => (
                          <Link
                            key={tag}
                            to={`/spaces/category/${tag}`}>
                            <p className="ui olive label" key={tag}>{tag}</p>
                          </Link>
                        )
                        )}
                      </div>
                      :
                      ''
                    }
                  </div>

                  <p className="show-page-favourites">
                    {isFavourite ?
                      <Icon
                        name="heart"
                        size="big"
                        onClick={handleFavourite}></Icon>
                      :
                      <Icon
                        name="heart outline" size="big"
                        onClick={handleFavourite}></Icon>
                    }
                    <p>{space.favouritedBy ? space.favouritedBy.length : 0} favourites</p>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <p>Error Loading</p>
      }
      <div className="ui comments">
        <h2 className="ui comments">Comments</h2>
        <div className="comment">
          <div className="avatar">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" />
          </div>
          <div className="content">
            <a className="author">Ricky</a>
            <div className="metadata">
              <div>2 days ago</div>
            </div>
            <div className="text">
              What a fantastic spot! Thanks {space.owner ? space.owner.username : ''}.
            </div>
          </div>
        </div>
      </div>
    </Container >
  )
}

export default SpaceShow