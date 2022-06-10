import React, { useState } from 'react'
import PersonalForm from '../component/PersonalForm'
import SkillForm from '../component/SkillForm'
import ExperienceForm from '../component/ExperienceForm'
import EducationForm from '../component/EducationForm'

function Details() {

    const [step, setstep] = useState(1);

    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };



    switch (step) {
        case 1:
            return (
                <>
                    <PersonalForm />
                    {step}
                    <button onClick={nextStep}>Next</button>
                    <button onClick={prevStep}>previous</button>
                </>
            )
            break;

        case 2:
            return (
                <>
                <EducationForm />
                {step}
                <button onClick={nextStep}>Next</button>
                <button onClick={prevStep}>previous</button>
            </>
            )
            break;

        case 3:
            return (
                <>
                    <ExperienceForm />
                    {step}
                    <button onClick={nextStep}>Next</button>
                    <button onClick={prevStep}>previous</button>
                </>
            )

            break;
        case 4:
            return (
                <SkillForm />
            )
            break;
    }

}

export default Details