import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'


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
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <div>
                <input
                  
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                  onFocus={handleFocus}
                />
              </div>
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
                  onFocus={handleFocus}
                />
              </div>
              {error && <p>Sorry, your username or password are incorrect</p>}
            </div>
            <div>
              <button type="submit">Log Me In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login