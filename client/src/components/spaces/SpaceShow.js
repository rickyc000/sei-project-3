import React from 'react'
import { getSingleSpace } from '../lib/api'
import { useParams, useLocation } from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl'
import {
  Button,
  Container,
  Icon
} from 'semantic-ui-react'

function SpaceShow() {

  const [isFavourited, setIsFavourited] = React.useState(false)

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

  // console.log(space)


  const handleFavourite = event => {
    event.preventDefault()
    setIsFavourited(!isFavourited)
    console.log('Add to Favourites')
    //* Add to the users favourites
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
                  <img src={space.image} className="ui large rounded image"></img>
                </div>
                <div className="showpage-text-wrapper">
                  <p>Description: {space.description}</p>
                  <p>Added By: {space.owner ? space.owner.username : ''}</p>
                  <p>Favourited By: {space.favouritedBy ? space.favouritedBy.length : 0} people</p>
                  <p>Comments:</p>
                  <p>Tags: {space.tags ? space.tags.map(tag => (`${tag} `)) : ''} </p>
                  <Button as='' onClick={handleFavourite} >
          Add To Favourites
                  </Button>
                  {isFavourited ?
        
                    <Icon name="heart" onClick={handleFavourite} ></Icon> : <Icon name="heart outline" onClick={handleFavourite} ></Icon>

                  }
                </div>
              </div>
              <p>Location:</p>
              <div className="map-container-small">
                <ReactMapGL
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                  height="100%"
                  width="100%"
                  mapStyle='mapbox://styles/mapbox/streets-v11'
                  latitude={space.location ? space.location.latitude : 51.533451}
                  longitude={space.location ? space.location.longitude : -51.533451}
                  zoom={14}
                // {...viewport}
                // onViewportChange={(viewport) => setViewport(viewport)}
                >
                  <Marker
                    key={space._id}
                    latitude={space.location ? space.location.latitude : 51.533451}
                    longitude={space.location ? space.location.longitude : 51.533451}
                  >
                    <span
                      role="img"
                      aria-label="map-marker"
                    >
                😺‍
                    </span>
                  </Marker>
                </ReactMapGL>
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