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
    <section className="form-container">
      <div className="form-box">
        <Form
          onSubmit={handleSubmit}>

          <ImageUploadField
            onChange={handleChange}
            labelText="Profile Image"
            name="profileImage"
            value={formdata.profileImage}
          />

          {errors.profileImage &&
            <p className='error field ui pointing above prompt label'>
              {errors.profileImage}</p>}

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

          {errors.username &&
            <p className='error field ui pointing above prompt label'>
              {errors.username}</p>}

          <Form.Group>
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

          {errors.firstName &&
            <p className='error field ui pointing above prompt label'>
              {errors.firstName}</p>}
          {errors.lastName &&
            <p className='error field ui pointing above prompt label'>
              {errors.lastName}</p>}

          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formdata.email}
            />
          </Form.Field>

          {errors.email &&
            <p className='error field ui pointing above prompt label'>
              {errors.email}</p>}

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

          {errors.password &&
            <p className='error field ui pointing above prompt label'>
              {errors.password}</p>}

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

          {errors.passwordConfirmation &&
            <p className='error field ui pointing above prompt label'>
              {errors.passwordConfirmation}</p>}

          <Button type="submit">
            Register
          </Button>

        </Form>
      </div>
    </section>
  )
}

export default Register