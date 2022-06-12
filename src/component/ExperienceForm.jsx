import React, { useState } from 'react'
import classes from './ExperienceForm.module.css'

function ExperienceForm() {

  const [formValues, setFormValues] = useState([
    { company: "", job: "", description: "", startMonth: "", endMonth: "" },
  ])

  const addFormFields = () => {
    setFormValues([...formValues, { company: "", job: "", description: "", startMonth: "", endMonth: "" }])
  }

  const removeFormFields = (i) => {
    let newForm = [...formValues];
    newForm.splice(i, 1);
    setFormValues(newForm)
  }

  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Experience Details</h3>
      </div>
      <form>
        {formValues.map((item, index) => {
          return (
            <div className="mainWrapper" key={index}>
              <div className='rowInputWrapper' >
                <div className='shortInput' >
                  <label htmlFor='company'> Company Name</label>
                  <input type="text" required id="company" />
                </div>
                <div className='shortInput' >
                  <label htmlFor='job'> Job Title</label>
                  <input type="text" required id="job" />
                </div>
              </div>

              <div className='rowInputWrapper' >
                <div className='shortInput' >
                  <label htmlFor="startMonth">Start Month</label>
                  <input type="month" required id="startMonth" />
                </div>
                <div className='shortInput' >
                  <label htmlFor="endMonth">End Month</label>
                  <input type="month" required id="endMonth" />
                </div>
              </div>

              <div className='longInput'>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" maxLength="250" />
              </div>
              
              <div className={classes.btnWrap}>
                {
                  index ?
                    <button type="button" className='remove' onClick={() => removeFormFields(index)}>Remove</button>
                    : null
                }
                {
                  formValues.length < 4 ? <button type="button" className='add' onClick={() => addFormFields()}>Add</button> : null
                }

              </div>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default ExperienceForm