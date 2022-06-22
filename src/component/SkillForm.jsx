import React, { useState } from 'react'
import classes from './SkillForm.module.css'

function SkillForm(props) {

  const [skillItem, setSkillItem] = useState(['item']);

  const [skill, setSkill] = useState('')

  const removeSkillItem = (i) => {
    let newForm = [...skillItem];
    newForm.splice(i, 1);
    setSkillItem(newForm)
  }

  const addSkillItem = (e) => {
    e.preventDefault();
    setSkillItem([...skillItem, skill])
  }

  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   props.handleNextStep();
  // }

  const onPreviousStep = (e)=>{
    e.preventDefault();
    props.handlePrevStep();
  }

  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Skills</h3>
      </div>
      <form>
        <div className={classes.itemInputWrap}>
          <div className={classes.inputWrap} >
            <label htmlFor='skill'> Skill Name</label>
            <input type="text" required id="skill" maxLength='25' onChange={(e) => setSkill(e.target.value)} />
          </div>
          <button onClick={addSkillItem}>Add</button>
        </div>

        <div className={classes.itemWrap}>
          {skillItem.map((item, index) => {
            return (
              <div key={index}>
                <p className={classes.itemBox}>
                  {item ? item : 'item'}
                  <span onClick={() => removeSkillItem(index)}>X</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className='stepWrapper'>
          <button onClick={onPreviousStep} >Previous</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SkillForm