import { useState } from 'react'
import classes from './EducationForm.module.css'

function EducationForm() {

  const [formValues, setFormValues] = useState([
    { school: "sam", location: "", degree: "", startMonth: "", endMonth: "" },
  ])

  const addFormFields = () => {
    setFormValues([...formValues, { school: "", location: "", degree: "", startMonth: "", endMonth: "" }])
  }

  const removeFormFields = (i) => {
    let newForm = [...formValues];
    newForm.splice(i, 1);
    setFormValues(newForm)
  }

  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Educational Details</h3>
      </div>
      <form>
        {formValues.map((item, index) => {
          return (
            <div className="mainWrapper" key={index}>
              <div className='rowInputWrapper' >
                <div className='shortInput' >
                  <label htmlFor='school'> School Name</label>
                  <input type="text" required id="school" />
                </div>
                <div className='shortInput' >
                  <label htmlFor='location'> School Location</label>
                  <input type="text" required id="location" />
                </div>
              </div>
              <div className='longInput' >
                <label htmlFor='degree'> Degree</label>
                <input type="text" required id="degree" />
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

              <div className={classes.btnWrap}>
                {
                  index ?
                    <button type="button" className='remove' onClick={() => removeFormFields(index)}>Remove</button>
                    : null
                }
                {
                  formValues.length < 2 ? <button type="button" className='add' onClick={() => addFormFields()}>Add</button> : null
                }

              </div>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default EducationForm