import React from "react";
import classes from "./Home.module.css";
import Resume from "../../src/Resume.png";
import { Link, useNavigate } from "react-router-dom";
import H from "../../src/h.png";
import Ho from "../../src/ho.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.navWrapper}>
          <nav className={classes.nav}>
            <div className={classes.logo}>
              <Link to={"/"}>
                <img src={Resume} alt="Logo" />
              </Link>
            </div>
            <div className={classes.btn}>
              <button
                onClick={() => {
                  navigate("/details");
                }}
              >
                Get Started
              </button>
              {/* <button> Dark</button> */}
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className={classes.heroWrap}>
          <div className={classes.heroImage}>
            <img src={H} alt="" />
          </div>
          <div className={classes.heroText}>
            A Quick and Easy Way to Create Your Resume In just four steps.
            Save the created Resume in PDF format send it straight to the hiring manager.
          </div>
        </div>
        {/* <img src={Ho} alt="" /> */}
      </main>
    </div>
  );
}

export default Home;
