import classes from './PersonalForm.module.css'

function PersonalForm() {
  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Peronsal Information</h3>
      </div>
      <form>
        <div className='rowInputWrapper' >
          <div className='shortInput' >
            <label htmlFor='name'> First Name</label>
            <input type="text" required id="fname" />
          </div>
          <div className='shortInput' >
            <label htmlFor='name'> Last Name</label>
            <input type="text" required id="lname" />
          </div>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='email'>Email</label>
            <input type="email" inputMode='email' required id="email" />
          </div>
          <div className='shortInput'>
            <label htmlFor='number'>Number</label>
            <input type="number" inputMode='numeric' required id="number" />
          </div>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='address'>Address</label>
            <input type="text" required id="address" />
          </div>
          <div className='shortInput'>
            <label htmlFor='city'>City</label>
            <input type="text" required id="city" />
          </div>
        </div>
        <div>
          <h5>Socials</h5>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='git'>Github</label>
            <input type="url" required id="git" />
          </div>
          <div className='shortInput' >
            <label htmlFor='social'>Linkiden</label>
            <input type="url" required id="social" />
          </div>
        </div>
      </form>
    </div>

  )
}

export default PersonalForm