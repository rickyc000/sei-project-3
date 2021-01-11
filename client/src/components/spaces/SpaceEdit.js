import React from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { getSingleSpace, editSpace } from '../lib/api'
import useForm from '../../utils/useForm'

import SpaceForm from './SpaceForm'

function SpaceEdit() {

  const history = useHistory()
  const { id } = useParams()
  const { formdata, errors, handleChange, setFormdata, setErrors } = useForm({
    name: '',
    description: '',
    image: '',
    location: ''
  })

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleSpace(id)
      setFormdata(data)
    }
    getData()
  }, [id, setFormdata])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await editSpace(id, formdata)
      history.push(`/spaces/${id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }
  return (
    <section className="section">
      <div className="container">
        <SpaceForm
          formdata={formdata}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Edit your Space!"
        />
      </div>
    </section>
  )
}

export default SpaceEdit