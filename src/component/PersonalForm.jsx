import classes from './PersonalForm.module.css'

function PersonalForm() {
  return (
    <div className={classes.formWrap}>
      <div className={classes.formHead}>
        <h3>Peronsal Information</h3>
      </div>
      <form>
        <div className={classes.inputWrapper} >
          <label htmlFor='name'> Name</label>
          <input type="text" required id="name" />
        </div>
        <div className={classes.inputWrapper} >
          <label htmlFor='email'>Email</label>
          <input type="email" inputMode='email' required id="email" />
        </div>
        <div className={classes.inputWrapper} >
          <label htmlFor='number'>Number</label>
          <input type="number" inputMode='numeric' required id="number" />
        </div>
        <div className={classes.inputWrapper} >
          <label htmlFor='city'>City</label>
          <input type="text" required id="city" />
        </div>
      </form>
    </div>

  )
}

export default PersonalForm