import React, { useState } from 'react'
import PersonalForm from '../component/PersonalForm'
import classes from './Details.module.css'
import SkillForm from '../component/SkillForm'
import ExperienceForm from '../component/ExperienceForm'
import EducationForm from '../component/EducationForm'

function Details() {

    const [step, setstep] = useState(1);

    const nextStep = () => {
        setstep(step + 1);
    };

    const prevStep = () => {
        setstep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <>
                    <PersonalForm />
                    <div className={classes.buttonWrapper}>
                        <button onClick={prevStep} disabled>Previous</button>
                        <button onClick={nextStep}>Next</button>
                    </div>
                </>
            )
            break;

        case 2:
            return (
                <>
                    <EducationForm />
                    <div className={classes.buttonWrapper}>
                        <button onClick={prevStep}>Previous</button>
                        <button onClick={nextStep}>Next</button>
                    </div>
                </>
            )
            break;

        case 3:
            return (
                <>
                    <ExperienceForm />
                    <div className={classes.buttonWrapper}>
                        <button onClick={prevStep}>Previous</button>
                        <button onClick={nextStep}>Next</button>
                    </div>
                </>
            )

            break;
        case 4:
            return (
                <>
                    <SkillForm />
                    <div className={classes.buttonWrapper}>
                        <button onClick={prevStep}>Previous</button>
                        <button onClick={nextStep} disabled>Next</button>
                    </div>
                </>

            )
            break;
    }

}

export default Details