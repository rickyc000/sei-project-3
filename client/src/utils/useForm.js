import React from 'react'
import { getPostcodeData } from '../components/lib/api'

function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)
  const [errors, setErrors] = React.useState(initialState)
  const [formLocation, setFormLocation] = React.useState(initialState)

  const [longLat, setLongLat] = React.useState(null)

  const getLongLat = async (postcode) => {
    try {
      const { data } = await getPostcodeData(postcode)
      setLongLat({
        longitude: data.result.longitude,
        latitude: data.result.latitude
      })
    } catch (err) {
      console.log(err)
    }
  }

  console.log(longLat)

  const handleChange = event => {
    const nextState = { ...formdata, [event.target.name]: event.target.value }
    const nextErrorState = { ...errors, [event.target.name]: '' }

    setLongLat(formdata.location)
    setFormdata(nextState)
    const nextFormLocation = { ...formdata, location: getLongLat(formdata.location) }

    console.log(nextFormLocation + ' nextFormLocation')
    console.log(formdata.location + ' formdata.location')
    setFormLocation(nextFormLocation)
    console.log(formLocation)
    
    setErrors(nextErrorState)
  }

  return {
    formdata,
    formLocation,
    errors,
    handleChange,
    setErrors,
    setFormdata
  }
}

export default useForm