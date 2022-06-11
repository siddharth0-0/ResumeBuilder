import classes from './PersonalForm.module.css'

function PersonalForm() {
  return (
    <div className={classes.formWrap}>
      <div className={classes.formHead}>
        <h3>Peronsal Information</h3>
      </div>
      <form>
        <div className={classes.rowInputWrapper} >
          <div className={classes.inputWrapper} >
            <label htmlFor='name'> First Name</label>
            <input type="text" required id="fname" />
          </div>
          <div className={classes.inputWrapper} >
            <label htmlFor='name'> Last Name</label>
            <input type="text" required id="lname" />
          </div>
        </div>
        <div className={classes.rowInputWrapper} >
          <div className={classes.inputWrapper} >
            <label htmlFor='email'>Email</label>
            <input type="email" inputMode='email' required id="email" />
          </div>
          <div className={classes.inputWrapper} >
            <label htmlFor='number'>Number</label>
            <input type="number" inputMode='numeric' required id="number" />
          </div>
        </div>
        <div className={classes.rowInputWrapper} >
          <div className={classes.inputWrapper} >
            <label htmlFor='address'>Address</label>
            <input type="text" required id="address" />
          </div>
          <div className={classes.inputWrapper} >
            <label htmlFor='city'>City</label>
            <input type="text" required id="city" />
          </div>
        </div>
        <div>
          <h5>Socials</h5>
        </div>
        <div className={classes.rowInputWrapper} >
          <div className={classes.inputWrapper} >
            <label htmlFor='git'>Github</label>
            <input type="url" required id="git" />
          </div>
          <div className={classes.inputWrapper} >
            <label htmlFor='social'>Linkiden</label>
            <input type="url" required id="social" />
          </div>
        </div>
      </form>
    </div>

  )
}

export default PersonalForm