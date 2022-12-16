import React from 'react'
import { calculators } from '../components/Fitnesscalculator/calculators'
import CalculatorsCard from '../components/Fitnesscalculator/CalculatorsCard'

function FitnessCalculator() {
  return (
    <div className="myContainer  m-top">
        <h1 className="heading-1 mt-3">Fitness Calculators</h1>
        <p>
        Get fit with our Fitness Calculator! Simply enter your age, weight, height, and a few other numbers to calculate your maintenance calories, macros and more. Get started now!
        </p>
        <div className="row m-0 justify-content-center  pt-3 calculator">
            {
                calculators.map((cal,index)=>{
                    return (
                        <div className="col-12 col-md-4 col-lg-3" key={index}>
                            <CalculatorsCard  text={cal.text} link={cal.link} icon={cal.icon} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FitnessCalculator