import React from 'react'

import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { createSpace } from '../lib/api'

import SpaceForm from './SpaceForm'

function SpaceNew() {

  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    name: '',
    description: '',
    image: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await createSpace(formdata)
      history.push(`/spaces/${data._id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <form className="ui form">
      <div className="field">
        <SpaceForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formdata={formdata}
          errors={errors}
          buttonText="Add a new Space!"
        />
      </div>
    </form>
  //   <section className="section">
  //   <div className="container">
  //     <SpaceForm
  //       handleChange={handleChange}
  //       handleSubmit={handleSubmit}
  //       formdata={formdata}
  //       errors={errors}
  //       buttonText="Add a new Space!"
  //     />
  //   </div>
  // </section>
  )
}

export default SpaceNew