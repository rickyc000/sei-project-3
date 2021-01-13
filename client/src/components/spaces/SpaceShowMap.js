import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Icon } from 'semantic-ui-react'

function spaceShowMap({ space }) {
  return (
    <div className="map-container-small">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height="300px"
        width="400px"
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
            <Icon name="circle thin green" />
          </span>
        </Marker>
      </ReactMapGL>
    </div>

  )
}

export default spaceShowMap