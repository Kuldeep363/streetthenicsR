import React from 'react'
import { Link, useOutletContext } from 'react-router-dom';

function MuscleGainExercise() {
    let [activeBtn] = useOutletContext();
    activeBtn('exercises');
  return (
    <div id="exercise" className="muscle-gain-page mt-5">
        <h1 className="heading-1 " style={{fontWeight: '600',fontSize: '24px'}}>Workout plan for beginners</h1>
        <h2 className="mt-3">
            Muscle building is specific to the muscle being worked. <br/> <br/>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Monday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Chest & Core
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Tuesday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Rest( let muscles grow )
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Wednesday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Legs & Shoulder
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Thursday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Rest( let muscles grow )
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Friday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Back & Arms
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Saturday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Core & Shoulder
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Sunday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Rest( let muscles grow )
                    </div>
                </div>
            </div>
            <br/>
            <Link to="/">Check exercises for each muscles</Link>
        </h2>



        <h1 className="heading-1 mt-5" style={{fontWeight: '600',fontSize: '24px'}}>Workout plan for intermediate and advance athletes</h1>
        <h2 className="mt-3">
            Muscle building is specific to the muscle being worked. <br/> <br/>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Monday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Back & Core
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Tuesday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Legs & Triceps
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Wednesday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Rest( let muscles grow )
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Thursday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Chest & Shoulder
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Friday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Back & Biceps( with Forearms )
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Saturday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Rest( let muscles grow )
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="exercise-row row m-0">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        Sunday
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        cardio & Core
                    </div>
                </div>
            </div>
            <br/>
            <Link to="/">Check exercises for each muscles</Link>
        </h2>

    </div>
  )
}

export default MuscleGainExercise