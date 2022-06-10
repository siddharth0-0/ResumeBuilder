import React from 'react'
import classes from './Home.module.css'
import Resume from '../../src/Resume.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.navWrapper}>
          <nav className={classes.nav}>
            <div className={classes.logo}>
              <Link to={'/'}>
                <img src={Resume} alt="Logo" />
              </Link>
            </div>
            <div className={classes.btn}>
              <button>Get Started</button>
              {/* <button> Dark</button> */}
            </div>
          </nav>
        </div>
      </header>
      <main>
        
      </main>
    </>
  )
}

export default Home;
