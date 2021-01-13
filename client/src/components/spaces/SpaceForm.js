import React from 'react'

function SpaceForm({ formdata, handleChange, handleSubmit, buttonText = 'Submit' }) {

  return (
    <section className="form-container">
      <div className="form-box">
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
            <div className="ui label">

              Verify Postcode
            </div>

          </div>


          <div className="field">
            <button type="submit" className="ui button">{buttonText}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SpaceForm
