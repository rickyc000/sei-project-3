import React from 'react'
import useForm from '../../utils/useForm'
import { registerUser } from '../lib/api'
import { useHistory } from 'react-router-dom'
import ImageUploadField from '../../utils/ImageUpload'

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
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>

            <div>
              <label>Username</label>
              <div>
                <input
                  
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                />
              </div>
              {errors.username && <p>{errors.username}</p>}
            </div>

            <div>
              <label>First Name</label>
              <div>
                <input
                  
                  placeholder="First Name"
                  onChange={handleChange}
                  name="firstName"
                  value={formdata.firstName}
                />
              </div>
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            <div>
              <label>Last Name</label>
              <div>
                <input
                  
                  placeholder="Last Name"
                  onChange={handleChange}
                  name="lastName"
                  value={formdata.lastName}
                />
              </div>
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div>
              <label>Email</label>
              <div>
                <input
                  
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                />
              </div>
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </div>
              {errors.password && <p>{errors.password}</p>}
            </div>

            <div>
              <label>Password Confirmation</label>
              <div>
                <input
                  type="password"
                
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={formdata.passwordConfirmation}
                />
              </div>
              {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
            </div>

            <div className="field">
              <ImageUploadField
                onChange={handleChange}
                labelText="Profile Image"
                name="profileImage"
                value={formdata.profileImage}
              />
              {errors.profileImage && <p>{errors.profileImage}</p>}
            </div>

            <div>
              <button type="submit">Register</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Register