import React from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getAllSpaces } from '../lib/api'
// import { getToken } from '../lib/auth'


function SpaceIndex() {
  const [viewport, setViewport] = React.useState({
    latitude: 51.502643,
    longitude: -0.07497,
    zoom: 10
  })

  const [spaces, setSpaces] = React.useState([])
  const [popup, setPopup] = React.useState(null)
  // const token = getToken()

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
    <div className="map-container">

      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height="100%"
        width="100%"
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...viewport}
        onClick={() => setPopup(null)}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {spaces.map(space => (
          <Marker
            key={space._id}
            latitude={Number(space.location.latitude)}
            longitude={Number(space.location.longitude)}
          >
            <span
              role="img"
              aria-label="map-marker"
              onClick={() => setPopup(space)}
            >
              😺‍
            </span>
          </Marker>
        ))}
        {popup &&
          <Popup
            closeOnClick={true}
            onClose={() => setPopup(null)}
            latitude={Number(popup.location.latitude)}
            longitude={Number(popup.location.longitude)}
          >
            <div>{popup.name}</div>
          </Popup>
        }
      </ReactMapGL>
    </div>


  )
}

export default SpaceIndex