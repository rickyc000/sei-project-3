import React from 'react'
import { Form } from 'semantic-ui-react'

function SpaceForm({ formdata, handleChange, handleSubmit, buttonText = 'Submit' }) {

  const handleTags = event => {
    const { checked, value, name } = event.target
    const tags = checked ? // * using a ternary to set the tags value
      [...formdata.tags, value]  // * if it was checked, add it
      :
      formdata.tags.filter(tag => tag !== value) // * if it was unchecked remove it
    handleChange({ target: { name, value: tags } }) // * setting them in to the formstate
  }


  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formdata.name}
          />
        </div>

      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={formdata.description}
          />
        </div>

      </div>
      <div className="field">
        <label className="label">Image URL</label>
        <div className="control">
          <input
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={formdata.image}
          />
        </div>

      </div>
      <div className="field">
        <label className="label">Postcode</label>
        <div className="control">
          <input
            placeholder="Postcode"
            name="location"
            onChange={handleChange}
            value={formdata.location}
          />
        </div>
      </div>
      <Form.Field
        name="tags"
        value="Peace & Quiet"
        onChange={handleTags}
        label='Peace & Quiet' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value="Art & Design"
        onChange={handleTags}
        label='Art & Design' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Sports & Leisure'
        onChange={handleTags}
        label='Sports & Leisure' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Mother Nature'
        onChange={handleTags}
        label='Mother Nature' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Architecture'
        onChange={handleTags}
        label='Architecture' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Lively'
        onChange={handleTags}
        label='Lively' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Food & Drink'
        onChange={handleTags}
        label='Food & Drink' control='input' type='checkbox' />
      <Form.Field
        name="tags"
        value='Riverside Spot'
        onChange={handleTags}
        label='Riverside Spot' control='input' type='checkbox' />

      <div className="field">
        <button type="submit" className="ui button">{buttonText}</button>
      </div>
    </form>
  )
}

export default SpaceForm
