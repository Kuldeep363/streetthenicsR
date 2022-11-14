import React from "react";
import { useState } from "react";
import StrengthExercise from "../assets/images/strength.png";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

function StrengthExercises() {
    let [video, setVideo] = useState(false);
    let [url, setUrl] = useState('')

    function showVideo(vURL){
        setVideo(video=>!video);
        setUrl(vURL);
    }
    return (
        <div className="myContainer weight-loss m-top">
            <div className="banner">
                <img src={StrengthExercise} alt="get strength - street thenics" />
            </div>
        {
            video?
            <VideoPlayer show={video} setVideo={setVideo} url={url} setUrl={setUrl} />
            :
            null
        }

      <div id="strength" className=" strength-page mt-5">
        <h1>
          <strong>
            To get strength choose the weight with which you can do maximum 5-6
            reps. In this way your muscles will get strength, increase weight
            about 5kg( 10 pounds ) if you can do it easily next time.
          </strong>
        </h1>

        <h1 className="heading-1">What are the benefits of strength training?</h1>
        <h2 className="mt-3">
          Research has shown that strength training can benefit your health and
          fitness in many different ways. According to the{" "}
          <a
            href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670"
            target="_blank"
            rel="noreferrer"
          >
            Mayo Clinic
          </a>{" "}
          , strength training may help: <br />
          <br />
          - build lean muscle mass <br />
          <br />
          - reduce body fat <br />
          <br />
          - burn calories more efficiently, even after you’ve exercised <br />
          <br />
          - boost metabolism and make weight loss easier <br />
          <br />
          - increase bone density and improve bone health <br />
          <br />
          - boost flexibility and improve range of motion <br />
          <br />
          - improve posture, balance, and stability <br />
          <br />
          - improve mood and overall sense of well-being <br />
          <br />
        </h2>

        <h1 className="heading-1">Bodyweight strength training exercises</h1>
        <h2 className="mt-3">
          <p style={{ color: "var(--red)", fontSize: "20px" }} className="mt-2">
            Start with warm up
          </p>
          Before starting your workout, do a warmup routine for at least 5 to 10
          minutes. This can include brisk walking, jogging on the spot, or
          movements that work your legs, arms, and other major muscle groups.{" "}
          <br />
          <br />
          - Once your muscles are warmed up and ready to move, you can start by
          doing a series of bodyweight exercises. <br />
          <br />
          - You don’t need any equipment for bodyweight exercises, except an
          exercise mat if the floor is too hard. <br />
          <br />- Use smooth, steady, and controlled movements.
        </h2>

        <h1 className="heading-1 mt-5">Lunges </h1>
        <img
          src="https://drive.google.com/uc?id=1fl95UOQVaB73YL0Vu736Kj64J6SJgjW7"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Start by standing up tall, feet shoulder-width apart. <br />{" "}
          <br />
          <b>2. </b>Step forward with your right foot, and lower your hips
          toward the floor until your right leg is at a 90-degree angle and your
          left knee is parallel to the ground. Make sure your front knee doesn’t
          go beyond your toes.
          <br /> <br />
          <b>3. </b>Lengthen your spine to keep your torso upright. <br />
          <br />
          <b>4. </b>Then step your right foot back to meet your left, and repeat
          this movement with your left leg. <br />
          <br />
          <strong>15-20 Reps ( 2-3 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("Es49QJkx3JE")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1 mt-5">Pushups </h1>
        <img
          src="https://drive.google.com/uc?id=1qPUCHPjK4i01joRLmCCWRnr1Yt0FI9hl"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Start in a plank position with your palms directly under
          your shoulders. <br /> <br />
          <b>2. </b>Keeping your back flat and bracing your core, lower your
          body by bending your elbows until your chest almost touches the floor
          <br /> <br />
          <b>3. </b>Immediately push your body back up to the starting position.
          <br />
          <br />
          A less challenging version of the pushup can be done by putting your
          weight on your knees instead of your toes. <br />
          <br />
          If you can do it easily, then use variations of pushup or use weight.{" "}
          <br />
          <br />
          <strong>5-20 Reps ( 5-6 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("IODxDxX7oi4")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1 mt-5">Pull Ups </h1>
        <img
          src="https://drive.google.com/uc?id=12LMpZ2ff_SHR61NgLSz3XmmXhzYFgSon"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b> Start with your hands on the bar approximately
          shoulder-width apart with your palms facing forward. <br /> <br />
          <b>2. </b>With arms extended above you, stick your chest out and curve
          your back slightly. That is your starting position.
          <br /> <br />
          <b>3. </b> Pull yourself up towards the bar using your back until the
          bar is at chest level while breathing out. <br />
          <br />
          <b>4. </b> Slowly lower yourself to the starting position while
          breathing in. That is one rep. <br />
          <br />
          If you're unable to perform pull ups using your full body weight,you
          can use exercise bands to help offset the weight.{" "}
          <b>
            <br />
          </b>
          <strong>5-20 Reps ( 5-6 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("G4lcCYTRZ5A")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1 mt-5">Planks </h1>
        <img
          src="https://drive.google.com/uc?id=1-gbZGv-UWj00oARdPNOCPHnOuBnrR4al"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Rest on your forearms and toes only, keeping your body in a
          straight line with your buttocks clenched and your abdominal muscles
          engaged. <br /> <br />
          <b>2. </b>Try to hold this position for 30 seconds. If that’s too
          hard, start with 20 seconds.
          <br /> <br />
          <b>3. </b>As you gain strength and fitness, try to hold the plank
          position for 1 minute or longer.
          <br />
          <br />
          Planks are an excellent exercise for improving your core strength and
          stability. This exercise can also strengthen the muscles in your back,
          chest, and shoulders. <br />
          <br />
          In the last set do it until you breakdown. <br />
          <br />
          <strong>Do for 30-60 seconds( 3-5 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("bALXnJx6xfM")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1 mt-5">Squat </h1>
        <img
          src="https://drive.google.com/uc?id=1lNzquWm1OdaDWvm7QSzwo4ls-ZaFJCQb"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Stand with your feet slightly wider than your hips. <br />{" "}
          <br />
          <b>2. </b>Slowly lower your hips down into a squat position.
          <br /> <br />
          <b>3. </b>Press up to come back into standing.
          <br />
          <br />
          <b>4. </b>Return to the starting position.
          <br />
          <br />
          You can use wights like barbell if it's easy for you.
          <strong>5-20 Reps ( 5-6 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("6sVqtRPwr8Q")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1">Free weight exercises</h1>
        <h2 className="mt-3">
          The following two exercises use dumbbells. Start with a 5-pound
          dumbbells. As you build up your strength, you can switch weights
          according to your strength. <br />
          <br />
          You can also use canned goods or water bottles in place of dumbbells.
          Just be sure to grip them firmly to avoid injury. <br />
          <br />
        </h2>

        <h1 className="heading-1 mt-5">Dumbbell shoulder press </h1>
        <img
          src="https://drive.google.com/uc?id=1RfmovczxMhhqVbk_hrPmaGqlUl2zmLwb"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Stand with your feet shoulder-width apart. <br /> <br />
          <b>2. </b>Pick up the dumbbells and raise them to shoulder height.
          Your palms can face forward or toward your body.
          <br /> <br />
          <b>3. </b>Raise the dumbbells above your head until your arms are
          fully extended.
          <br />
          <br />
          <b>4. </b>Pause in this position for a few seconds, and then bring the
          dumbbells back to shoulder height.
          <br />
          <br />
          You can use wights like barbell if it's easy for you.
          <strong>10-15 Reps ( 5-6 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("OOe_HrNnQWw")}
          >
            Video Tutorial
          </div>
        </h2>

        <h1 className="heading-1 mt-5">Dumbbell triceps kickback</h1>
        <img
          src="https://drive.google.com/uc?id=1JfKv0fPLvJcKjHeqPmizXXvx9UudmDXG"
          alt="Tabata Drill exercise for weight loss - street thenics"
          style={{ width: "100%" }}
        />
        <h2 className="mt-3">
          <strong>Steps to follow:</strong>
          <br />
          <br />
          <b>1. </b>Grab two dumbbells and hold one in each hand.
          <br /> <br />
          <b>2. </b>Bend your torso at a 45-degree angle, and bend your elbows
          so they form a 90-degree angle.
          <br /> <br />
          <b>3. </b>Then straighten your arms out directly behind you, engaging
          your triceps as you go.
          <br />
          <br />
          <b>4. </b>You can either do one arm at a time, or both together.
          <br />
          <br />
          <strong>10-15 Reps ( 3-5 Sets )</strong>
          <div
          className="videoTut"
            onClick={()=> showVideo("XuH2W_R5YoA")}
          >
            Video Tutorial
          </div>
        </h2>
      </div>
    </div>
  );
}

export default StrengthExercises;
