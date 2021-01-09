import React from 'react'
import { getSingleSpace } from '../lib/api'
import { useParams } from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl'
import {
  Button
} from 'semantic-ui-react'

function SpaceShow() {

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

  console.log(space)
  

  const handleFavourite = event => {
    event.preventDefault()
    console.log('Add to Favourites')
    //* Add to the users favourites
  }

  // Mapbox Functions:

  const [viewport, setViewport] = React.useState({
    latitude: 51.502643,
    longitude: -0.07497,
    zoom: 10
  })


  // console.log(space.location.latitude)

  return (
    <div>
      <h1>Space: {space.name}</h1>
      <img src={space.image}></img>
      <p>Description: {space.description}</p>
      <p>Added By: {space.owner ? space.owner.username : '' }</p>
      <p>Favourited By: {space.favouritedBy ? space.favouritedBy.length : 0} people</p>
      <p>Comments:</p>
      
      
      <p>Tags: {space.tags ? space.tags.map(tag => ( `${tag} ` )) : '' } </p>
      <Button as='' onClick={handleFavourite}>
            Add To Favourites
      </Button>
      <p>Location:</p>
      <div className="map-container-small">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height="100%"
          width="100%"
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <Marker
            key={space._id}
            latitude={51.412747}
            longitude={-0.359031}
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
  )
}

export default SpaceShow