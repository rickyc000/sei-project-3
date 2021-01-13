import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'
import { Button, Form } from 'semantic-ui-react'


function Login() {
  const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      history.push('/spaces')
    } catch (err) {
      setError(true)
    }
  }



  const handleFocus = () => {
    setError(false)
  }

  return (
    <section className="form-container">
      <div className="form-box ui form error">

        <Form
          onSubmit={handleSubmit}>

          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formdata.email}
              onFocus={handleFocus}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formdata.password}
              onFocus={handleFocus}
            />
          </Form.Field>

          {error &&
          <div className="ui error message small">
            <div className="header">Incorrect Password or Email</div>
            <p>Sorry, your username or password are incorrect.</p>
          </div>
          }



          <Button type="submit">
            Log In
          </Button>

        </Form>
      </div>
    </section>
  )
}

export default Login