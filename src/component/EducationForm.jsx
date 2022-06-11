import classes from './EducationForm.module.css'

function EducationForm() {
  return (
    <div className={classes.formWrap}>
      <div className={classes.formHead}>
        <h3>Educational Details</h3>
      </div>
      <form>
        <div className={classes.mainWrapper}>
          <div className={classes.rowInputWrapper} >
            <div className={classes.inputWrapper} >
              <label htmlFor='school'> School Name</label>
              <input type="text" required id="school" />
            </div>
            <div className={classes.inputWrapper} >
              <label htmlFor='location'> School Location</label>
              <input type="text" required id="location" />
            </div>
          </div>
          <div className={classes.longInput} >
            <label htmlFor='degree'> Degree</label>
            <input type="text" required id="degree" />
          </div>
          <div className={classes.rowInputWrapper} >
            <div className={classes.inputWrapper} >
              <label htmlFor="startMonth">Start Month</label>
              <input type="month" required id="startMonth" />
            </div>
            <div className={classes.inputWrapper} >
              <label htmlFor="endMonth">End Month</label>
              <input type="month" required id="endMonth" />
            </div>
          </div>
        </div>

        <div className={classes.mainWrapper}>
          <div className={classes.rowInputWrapper} >
            <div className={classes.inputWrapper} >
              <label htmlFor='school'> School Name</label>
              <input type="text" required id="school" />
            </div>
            <div className={classes.inputWrapper} >
              <label htmlFor='location'> School Location</label>
              <input type="text" required id="location" />
            </div>
          </div>
          <div className={classes.longInput} >
            <label htmlFor='degree'> Degree</label>
            <input type="text" required id="degree" />
          </div>
          <div className={classes.rowInputWrapper} >
            <div className={classes.inputWrapper} >
              <label htmlFor="startMonth">Start Month</label>
              <input type="month" required id="startMonth" />
            </div>
            <div className={classes.inputWrapper} >
              <label htmlFor="endMonth">End Month</label>
              <input type="month" required id="endMonth" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EducationForm