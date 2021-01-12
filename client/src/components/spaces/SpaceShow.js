import React from 'react'
import { getSingleSpace, addToFavourites, removeFromFavourites, deleteSpace, addComment, deleteComment } from '../lib/api'
import SpaceShowMap from './SpaceShowMap'
import { isOwner, getUserId } from '../lib/auth'
// import { Menu } from 'semantic-ui-react'
import { useParams, useLocation, Link, useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
//import { Button, Comment, Form, Header } from 'semantic-ui-react'

import {
  Button,
  Comment,
  Form,
  Header,
  Container,
  Icon
} from 'semantic-ui-react'

function SpaceShow() {



  useLocation()

  const { formdata, setFormdata, handleChange } = useForm({
    text: ''
  })

  const [space, setSpace] = React.useState([])
  const [refreshData, setRefreshData] = React.useState(true)
  const { id } = useParams()
 


  React.useEffect(() => {
    const getSpace = async () => {
      try {
        const { data } = await getSingleSpace(id)
        setSpace(data)
        if (data.favouritedBy.includes(getUserId())) {
          setIsFavourite(true)
        }
        if (data.favouritedBy) {
          setFavourites(data.favouritedBy.length)
        }
        if (data.comments) {
          setComments(data.comments)
          setRefreshData(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (refreshData) getSpace()
  }, [id, refreshData])

  const history = useHistory()
  
  // Favourite Functions

  const [isFavourite, setIsFavourite] = React.useState(false)
  const [favourites, setFavourites] = React.useState(0)

  const [comments, setComments] = React.useState(null)
  
 
  console.log(comments)
  
  
  const handleFavourite = async event => {
    event.preventDefault()
    try {
      await addToFavourites(id)
      setIsFavourite(!isFavourite)
      setFavourites(favourites + 1)
    } catch (err) {
      console.log(err)
    }
    //* Add to the users favourites
  }

  const handleUnFavourite = async event => {
    event.preventDefault()
    try {
      setIsFavourite(!isFavourite)
      setFavourites(favourites - 1)
      await removeFromFavourites(id)
    } catch (err) {
      console.log(err)
    }
    //* Add to the users favourites
  }



  // Add Comment Data 
  const handleAddComment = async event => {
    event.preventDefault()
    try {
      await addComment(id, formdata)
      setRefreshData(true)
      setFormdata({ text: '' })
      console.log('Add Comment')
    } catch (err) {
      console.log(err)
    }
  }
  const handleDeleteComment = async event => {
    event.preventDefault()
    try {
      const commentId = event.target.name
      await deleteComment(id, commentId)
      setRefreshData(true)
    } catch (err) {
      console.log(err)
    }
  }


  //Delete Space

  const handleDelete = async () => {
    try {
      await deleteSpace(id)
      history.push('/spaces')
    } catch (err) {
      console.log(err)
    }
  }
  


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

  console.log(space)


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
                    <Link to={space.owner ? `/users/${space.owner._id}` : ''} className="ui image label">
                      <Icon name="user circle" />
                      Added by {space.owner ? space.owner.username : ''}
                    </Link>
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
              
                 
                  {isOwner(space.owner ? space.owner._id : '') &&
                    <div className="buttons">
                      <button onClick={handleDelete} className="button is-danger">Delete Space</button>
                      <Link to={`/spaces/${id}/edit`} className="button is-warning">Edit Space</Link>
                    </div>
                  }
               
              
                  <p className="show-page-favourites">
                    {!isFavourite ?
                      <Icon
                        name="heart outline" size="big"
                        onClick={handleFavourite}></Icon>
                      
                      :
                      <Icon
                        name="heart"
                        size="big"
                        onClick={handleUnFavourite}></Icon>
                    }
                    <p>{favourites ? favourites : 0} favourites</p>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <p>Error Loading</p>
      }
      <>
        <Comment.Group>
          <Header as='h3' dividing>
      Comments
          </Header>

          {comments ? comments.map(comment => (
            <>
              <Comment key={comment._id} value={comment._id}>

                <Comment.Avatar src={comment.owner.profileImage} />
                <Comment.Content>
                  <Comment.Author as='a'>{comment.owner.name}</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action onClick={handleDeleteComment} name={comment._id}>Delete</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </>
          ))
            :
            <Comment>
              <Comment.Avatar image="" />
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          }
 
          <Form reply>
          
            <Form.TextArea onChange={handleChange} name="text" value={formdata.text}/>
            <Button content='Add Reply' onClick={handleAddComment} labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>

      </>
    </Container >
  )
}

export default SpaceShow