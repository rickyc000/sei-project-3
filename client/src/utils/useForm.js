import React from 'react'

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
    errors,
    handleChange,
    setErrors
  }
}
export default useForm




// import React from 'react'
// import { getPostcodeData } from '../components/lib/api'

// function useForm(initialState) {
//   const [formdata, setFormdata] = React.useState(initialState)
//   const [errors, setErrors] = React.useState(initialState)
//   const [formLocation, setFormLocation] = React.useState(initialState)
//   const [longLat, setLongLat] = React.useState(null)

//   const getLongLat = async (postcode) => {
//     try {
//       const { data } = await getPostcodeData(postcode)
//       setLongLat({
//         longitude: data.result.longitude,
//         latitude: data.result.latitude
//       })
//       // We now have the long and lat in an object form
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   console.log(longLat + ' longLat')

//   const handleChange = event => {

//     // formdata object is populated as user types:
//     const nextState = { ...formdata, [event.target.name]: event.target.value }
//     const nextErrorState = { ...errors, [event.target.name]: '' }

//     // formdata.location (postcode field) is passed to the Long/Lat async function:
//     getLongLat(formdata.location)
//     console.log(getLongLat(formdata.location) + 'getLongLat')

//     setFormdata(nextState)
//     const nextFormLocation = { ...formdata, location: getLongLat(formdata.location) }

//     console.log(nextFormLocation + ' nextFormLocation')
//     console.log(formdata.location + ' formdata.location')
//     setFormLocation(nextFormLocation)
//     console.log(formLocation.longitude + ' formLocation.longitude')
//     console.log(getLongLat(formdata.location) + ' getLongLat')
//     setErrors(nextErrorState)
//   }

//   return {
//     formdata,
//     formLocation,
//     errors,
//     handleChange,
//     setErrors,
//     setFormdata
//   }
// }

// export default useForm