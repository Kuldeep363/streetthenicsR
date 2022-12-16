import React from 'react'
import { Link } from 'react-router-dom';
import './FitnessCalculator.css';

function CalculatorsCard({text,link,icon}) {
  return (
    <Link to={link}>
        <div className='calculator-card'>
            <p>
                {icon}
            </p>
            <p>
                {text}
            </p>
        </div>
    </Link>
  )
}

export default CalculatorsCard