import React from 'react'
import useForm from '../../utils/useForm'
import { registerUser } from '../lib/api'
import { useHistory } from 'react-router-dom'
import ImageUploadField from '../../utils/ImageUpload'
import { Button, Form, Divider } from 'semantic-ui-react'

function Register() {

  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      console.log(formdata)
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className={`form-container ${errors ? 'error-form-container ' : ''}`}>
      <div className="form-box ui form error">
        <Form
          onSubmit={handleSubmit}>
          <ImageUploadField
            onChange={handleChange}
            labelText="Profile Image"
            name="profileImage"
            value={formdata.profileImage}
          />

          {/* {errors.profileImage &&
            <p className='error field ui pointing above prompt label'>
              {errors.profileImage}</p>} */}

          {errors.profileImage &&
          <div className="ui error message small">
            <p>Profile Image is Required</p>
          </div>
          }
          
          <Divider />

          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={formdata.username}
            />
          </Form.Field>

          {/* {errors.username &&
            <p className='error field ui pointing above prompt label'>
              {errors.username}</p>} */}

          {errors.username &&
          <div className="ui error message small">
            <p>Username is Required</p>
          </div>
          }

          <Form.Group className="name-errors">
            <Form.Field>
              <label>First Name</label>
              <input
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formdata.firstName}
              />
            </Form.Field>


            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formdata.lastName}
              />
            </Form.Field>

          </Form.Group>

          <div className="name-errors-form">
            
            <div className="first-name">
              {errors.firstName &&
            <div className="ui error message small">
              <p>First Name is Required</p>
            </div>
              }
            </div>
            
            
            <div className="last-name">
              {errors.lastName &&
              <div className="ui error message small">
                <p>Last Name is Required</p>
              </div>
              }
            </div>
          </div>
        

          {/* {errors.firstName &&
            <p className='error field ui pointing above prompt label'>
              {errors.firstName}</p>}
          {errors.lastName &&
            <p className='error field ui pointing above prompt label'>
              {errors.lastName}</p>} */}
          
           
    
       
          

          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formdata.email}
            />
          </Form.Field>

          {/* {errors.email &&
            <p className='error field ui pointing above prompt label'>
              {errors.email}</p>} */}

          {errors.email &&
          <div className="ui error message small">
            <p>Email is Required</p>
          </div>
          }

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formdata.password}
            />
          </Form.Field>

          {/* {errors.password &&
            <p className='error field ui pointing above prompt label'>
              {errors.password}</p>} */}

          {errors.password &&
          <div className="ui error message small">
            <p>Password is Required</p>
          </div>
          }

          <Form.Field>
            <label>Password Confirmation</label>
            <input
              type="password"
              placeholder="Password Confirmation"
              onChange={handleChange}
              name="passwordConfirmation"
              value={formdata.passwordConfirmation}
            />
          </Form.Field>

          {/* {errors.passwordConfirmation &&
            <p className='error field ui pointing above prompt label'>
              {errors.passwordConfirmation}</p>} */}

          {errors.passWordConfirmation &&
          <div className="ui error message small">
            <p>The Password doesnt match</p>
          </div>
          }

          <Button type="submit">
            Register
          </Button>

        </Form>
      </div>
    </section>
  )
}

export default Register