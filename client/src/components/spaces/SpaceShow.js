import React from 'react'
import { getSingleSpace, addToFavourites } from '../lib/api'
import { useParams, useLocation } from 'react-router-dom'
// import SpaceShowMap from './SpaceShowMap'
import { Menu } from 'semantic-ui-react'

import {
  Button,
  Container,
  Icon
} from 'semantic-ui-react'

function SpaceShow() {

  const [isFavourite, setIsFavourite] = React.useState(false)

  useLocation()

  const [space, setSpace] = React.useState([])
  const { id } = useParams()


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

  const [activeTab, setActiveTab] = React.useState({ activeItem: 'image' })

  const handleTabClick = (e, { name }) => {
    console.log(e)
    setActiveTab({ activeItem: name })
  }

  // Mapbox Functions:

  // const [viewport, setViewport] = React.useState({
  //   latitude: 51.502643,
  //   longitude: -0.07497,
  //   zoom: 12
  // })



  console.log(space.location)

  return (
    <Container>
      <>
        { space ?
          <>
            <div className="showpage-wrapper">
              <h1>{space.name}</h1>

              <div className="showpage-image-and-text-wrapper">

                <div className="showpage-image-wrapper">

                  <Menu tabular>
                    <Menu.Item
                      name='image'
                      active={activeTab === 'image'}
                      onClick={handleTabClick}
                    >
                      {/* <div>
                        <img src={space.image} className="ui large rounded image"></img>
                      </div> */}
                      <p>image</p>
                    </Menu.Item>

                    <Menu.Item
                      name='map'
                      active={activeTab === 'map'}
                      onClick={handleTabClick}
                    >
                      {/* <div>
                        <SpaceShowMap space={space} />
                      </div> */}
                      <p>map</p>
                    </Menu.Item>



                  </Menu>




                </div>





                <div className="showpage-text-wrapper">
                  <p>{space.description}</p>
                  <div>
                    <a className="ui image label">
                      <Icon name="user circle" />
                      Added by {space.owner ? space.owner.username : ''}
                    </a>
                  </div>

                  <p>Favourited By: {space.favouritedBy ? space.favouritedBy.length : 0} people</p>
                  <p>Comments:</p>
                  <p>Tags: {space.tags ? space.tags.map(tag => (`${tag} `)) : ''} </p>
                  <Button as='' onClick={handleFavourite} >
                    Add To Favourites
                  </Button>
                  {isFavourite ?

                    <Icon name="heart" onClick={handleFavourite} ></Icon> : <Icon name="heart outline" onClick={handleFavourite} ></Icon>

                  }
                </div>
              </div>

            </div>
          </>
          : <p>Error Loading</p>
        }
      </>
    </Container>
  )
}

export default SpaceShow