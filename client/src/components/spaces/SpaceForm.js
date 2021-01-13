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
              //className={`input ${errors.name ? 'is-danger' : ''}`}
              //input type="text"
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
              //className={`textarea ${errors.description ? 'is-danger' : ''}`}
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={formdata.description}
              />
            </div>
         
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
              //className={`input ${errors.image ? 'is-danger' : ''}`}
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={formdata.image}
              />
            </div>
          
          </div>
          <div className="field">
            <label className="label">Location</label>
            <div className="control">
              <input
              //className={`input ${errors.location ? 'is-danger' : ''}`}
                placeholder="Location"
                name="location"
                onChange={handleChange}
                value={formdata.location}
              />
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
