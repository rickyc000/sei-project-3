import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container
} from 'semantic-ui-react'

function ProfileInfo({ profile, image, name }) {

  const [spacesTab, setSpacesTab] = React.useState(true)
  const handleSpacesTab = () => {
    setSpacesTab(!spacesTab)
    console.log('photo tab')
  }


  return (
    <>
      <Container>
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container"> 
              <img className="profile-image" src={image}></img>
            </div>
            <div className="info-container">
              <h1>{profile.firstName} {profile.lastName}</h1>
              <p>{name} Favourite Kind of Happy Place:</p>
              <div className="profile-tags-container">
                {profile.favouriteTags ?
                  <div>
                    <div className="tags">
                      {profile.favouriteTags.map(tag => (
                        <Link to={`/spaces/category/${tag}`} key={tag}>
                          <div className="profile-tag">
                            <p className="ui olive label profile-tag" key={tag}>{tag}</p>
                          </div>
                        </Link>))}
                    </div>
                  </div>
                  :
                  ''
                }
              </div>
            </div>
          </div>
          <div className="spaces-tabs-wrapper">
            <div className="ui attached tabular menu tab-menu">
              <div className={spacesTab ? 'active item' : 'item'}>
                <div onClick={handleSpacesTab}> Favourite Spaces </div>
              </div>
              <div className={spacesTab ? 'item' : 'active item'}>
                <div onClick={handleSpacesTab}> Created Spaces </div>
              </div>
            </div>
            {!spacesTab ?
              <div className="ui bottom attached segment active tab">
                <div>
                  {profile.createdSpaces ?
                    <div className="space-grid">
                      {profile.createdSpaces.map(space => (
                        <div key={space._id} className="space-div">
                          <Link to={`/spaces/${space._id}`}>
                            <img src={space.image} className="space-image"/>
                          </Link>
                          {/* <p key={space._id}>{space.name}</p> */}
                        </div>
                        
                      ))}
                    </div>
                    :
                    <p>{profile.firstName} hasnt created any spaces</p>
                  }
                </div>
              </div>
              :
              <div className="ui bottom attached segment active tab">
                <div>
                  {profile.favouritedSpaces ?
                    <div className="space-grid">
                      {profile.favouritedSpaces.map(space => (
                        <div className="space-div" key={space._id}>
                          <Link to={`/spaces/${space._id}`}>
                            <img src={space.image} className="space-image"/>
                          </Link>
                          {/* <p key={space._id}>{space.name}</p> */}
                        </div>
                        
                        
                      ))}
                    </div>
                    :
                    <p>{profile.firstName} hasnt favourited any spaces</p>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProfileInfo