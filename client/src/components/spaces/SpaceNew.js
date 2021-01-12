import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { createSpace } from '../lib/api'

import SpaceForm from './SpaceForm'

function SpaceNew() {

  const history = useHistory()
  const { formdata, formLocation, errors, handleChange, setErrors } = useForm({
    name: '',
    description: '',
    image: '',
    location: ''
  })

  // const updatedForm = { ...formdata, location: formLocation.location }
  // console.log(updatedForm)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await createSpace(formLocation)
      history.push(`/spaces/${data._id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <div className="field">
      <SpaceForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formdata={formdata}
        errors={errors}
        buttonText="Add a new Space!"
      />
    </div>
  )
}

export default SpaceNew