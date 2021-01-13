import React from 'react'
// import { getPostcodeData } from '../components/lib/api'

// * Have removed all references to dealing with the location here, going to do that on the submit method in the form component now

function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)
  const [errors, setErrors] = React.useState(initialState)
  const handleChange = event => {
    const nextState = { ...formdata, [event.target.name]: event.target.value }
    const nextErrorState = { ...errors, [event.target.name]: '' }
    setFormdata(nextState)
    setErrors(nextErrorState)
  }

  return {
    formdata,
    setFormdata,
    errors,
    handleChange,
    setErrors
  }
}
export default useForm