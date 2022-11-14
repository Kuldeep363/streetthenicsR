import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function WeightLossExercise() {
  let [activeBtn] = useOutletContext();
  let [video, setVideo] = useState(false);
  let [url, setUrl] = useState("");

  function showVideo(vURL) {
    setVideo((video) => !video);
    setUrl(vURL);
  }
  activeBtn("exercises");
  useEffect(() => {
    document.title =
      "Weight Loss Exercises -Street Thenics| Best Weight Loss Exercises";
  });
  return (
    <div id="exercise" className=" weight-loss-page mt-5">
        {
            video?
            <VideoPlayer show={video} setVideo={setVideo} url={url} setUrl={setUrl} />
            :
            null
        }
      <h1 className="heading-1">Best exercises for weight loss </h1>
      <h2 className="mt-3">
        Yes, exercise is essential for overall health, but when you're trying to
        lose weight it becomes even more important. If you're aiming to lose
        weight without the gym, you can rely on the best exercises to do at home
        to lose weight. <br />
        <br />
        In addition to helping you lose weight, exercise has been linked to many
        other benefits, including improved mood, stronger bones, and a reduced
        risk of many chronic diseases <br />
        <br />
        To help you find the a calorie-burning workout that fits your lifestyle
        and goals, we rounded up the best exercises for weight loss here: <br />
        <br />
      </h2>

      <h1 className="heading-1 mt-5">Running</h1>
      <img
        src="https://drive.google.com/uc?id=1R2PuBMHF7TNz2VpR52nCH7dsqi5h4uO6"
        alt="running exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        Whether you love or hate it, running is one of the best and simplest
        ways to burn calories—and you don't need a treadmill to do it. Just lace
        up your shoes and hit the road. Running in intervals—speeding up and
        slowing down your pace—will help make the minutes and miles go by
        quickly. Run in fartleks, which means speedplay in Swedish, where you
        pick up the pace every other street lamp or water hydrant you hit, and
        then slow down after you pass the next one. <br />
        <br />
        "The best way to burn calories while running is to vary your workouts,"
        says Natalie Dorset, a running coach in New York. "If you're doing the
        same workout week after week, your body won't have anything to adapt to.
        Vary the speed within a workout, do some bursts of faster running, but
        also mix up the types of runs you do. Whether it's slow and steady,
        comfortable and hard, or intervals, variety is the key to constant
        adaptation. <br /> <br />
        Harvard Health estimates that a 155-pound (70-kg) person burns
        approximately 298 calories per 30 minutes of jogging at a 5-mph (8-km/h)
        pace, or 372 calories per 30 minutes of running at a 6-mph (9.7-km/h)
        pace. <br />
        <br />
        <strong>
          Start running with a target distance in mind and complete it in a
          single go, vary your pace but don't stop. Increase your target
          distance when you feel comfortable with previous target( but not in a
          single day, complete target with ease atleast 3-4 days consecutively)
        </strong>
      </h2>

      <h1 className="heading-1 mt-5">Skipping/ Jump rope</h1>
      <img
        src="https://drive.google.com/uc?id=1p0W4NtB6nFT3FTQq4glEPpo_SS3spXWO"
        alt="skipping exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        If the last time you held a jump rope was in grade school, it’s time to
        get back into the swing of things. This calorie-busting workout can burn
        up to 318 calories (for a 140-pound woman) every 30 minutes—and your
        heart isn’t the only muscle that's working hard. <br /> <br />
        Jumping rope is a full-body workout. Fire up your quads and glutes to
        help you explode from the ground, and engage your core to keep you
        upright and stable as you land back down. Jumping rope also involves a
        little arm and shoulder action, as they remain tight while the rope
        movement comes from the wrists. <br />
        <br />
        Jumping rope is a great way to burn calories while improving
        cardiovascular health, all-over-toning, and coordination, and it will
        help build power while lowering your risk of injury. <br />
        <br />
        <strong>TRY this:</strong>
        Start with 60 seconds of freestyle jump roping. You can jump with two
        feet, one foot, alternate, skip, or twist your hips. You can have some
        fun with this one. Next, put down your rope and do 30 seconds of
        mountain climbers. Return for 60 seconds of freestyle jump roping. End
        with 30 seconds in a plank. Rest for 2 minutes and repeat the cycle.
        Complete 3 rounds.
      </h2>

      <h1 className="heading-1 mt-5">Swimming</h1>
      <img
        src="https://drive.google.com/uc?id=1mB_xgvMagdSOWUob8LRaz-C0YPOk20M7"
        alt="swimming for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        Good news if you don't enjoy the pounding effects of running on your
        body: Swimming is an excellent workout that combines cardio with
        strength training in one low-impact workout. Water adds an element of
        resistance, forcing you to recruit more muscles to move efficiently and
        use oxygen wisely. <br /> <br />
        Need more motivation to hit the pool? "Simply being in water around 78
        degrees for your workout helps to burn even more calories than on land
        because your body's natural temperature is 98.6 degrees. It fights to
        keep itself warm in water by burning calories and fat <br /> <br />
        You're also using your legs, arms, and core to help you stay afloat,
        making swimming a great total-body exercise for building strength and
        endurance. <br />
        <br />
      </h2>

      <h1 className="heading-1 mt-5">Forward Lunge</h1>
      <img
        src="https://drive.google.com/uc?id=1wg2ZMnHI6-5_Y7_cjyLaV5Lq5J_3cvMc"
        alt="lunges exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Stand tall with feet hip-width apart. Place hands on hips or
        hold weights by sides to start. <br />
        <br />
        <b>2. </b>Take a controlled step forward with the right leg. Keeping
        spine tall, lower body until the front and back leg form a 90-degree
        angle. <br />
        <br />
        <b>3. </b>Pause, then step right leg back to start. Step left leg
        forward to repeat on the other side. <br />
        <br />
        <strong>10 Reps each leg( 3-5 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("wrwwXE_x-pQ")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="heading-1 mt-5">Burpee</h1>
      <img
        src="https://drive.google.com/uc?id=1Ed4YhVOFDLhaiOsascRS8TT6VzbwN5vU"
        alt="burpee exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Stand with your feet shoulder-width apart and arms at your
        sides. Push your hips back, bend knees, and reach palms to the ground to
        lower into a crouch. <br /> <br />
        Immediately lower back into a squat for the next rep. Repeat 8 to 12
        times. Complete 3 sets. <br /> <br />
        <b>2. </b>With hands shoulder-width on the floor directly in front of
        feet, and shift your weight to them to jump back and land softly in
        plank position. <br /> <br />
        <b>3. </b>Jump feet forward so they land just outside of hands. Jump
        explosively into the air, reaching hands overhead or leaving by sides.
        <br />
        <br />
        <strong>10 Reps ( 3-5 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("qLBImHhCXSw")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="heading-1 mt-5">Explosive Lunge</h1>
      <img
        src="https://drive.google.com/uc?id=15fe1szYMXGWCONzCeAR9_WgePnH7HjTW"
        alt="explosive lunges exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Start with feet together, hands on your hips. Step forward
        with the right leg and lower into a lunge so right knee is bent at a
        90-degree angle. <br /> <br />
        <b>2. </b>Jump up, switching legs midair. <br /> <br />
        <b>3. </b>Land softly with the left leg forward, immediately lowering
        into a lunge. <br />
        <br />
        <strong>Do for 1 minute ( 3-5 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("S7kJeWQI5YI")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="heading-1 mt-5">Squat </h1>
      <img
        src="https://drive.google.com/uc?id=18UbV-Oma8HAfQDBbdRuKVRtUAN7xP6L9"
        alt="squats exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Start with feet hip-width apart, arms either at sides holding
        weights or clasped in front of chest. <br /> <br />
        <b>2. </b>Keeping weight in heels and back straight, sit hips back and
        bend knees to lower into a squat until thighs are parallel to the floor.
        Remember to keep knees in line with toes the entire time. Maintain an
        even pace and rise back to start.
        <br /> <br />
        <strong>20 Reps ( 3-5 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("YaXPRqUwItQ")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="heading-1 mt-5">Mountain Climbers </h1>
      <img
        src="https://drive.google.com/uc?id=1VL_E26OrTppffBVjN8mWdGxFUSowZEWS"
        alt="mountain climbers exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Start in a plank position on the floor. Drive the right knee
        in toward chest without raising hips or allowing right foot to touch the
        floor. <br /> <br />
        <b>2. </b>Place right foot back in plank and repeat on the other side,
        driving the left knee in toward chest. Repeat, alternating legs.
        <br /> <br />
        <strong>Do for 1 minute ( 3-5 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("e9Nwd8ckkYA")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="heading-1 mt-5">Tabata Drill </h1>
      <img
        src="https://drive.google.com/uc?id=1um2g_sOSacFAMXcrlMHcpGExGyqYmQW5"
        alt="Tabata Drill exercise for weight loss - street thenics"
        style={{ width: "100%" }}
      />
      <h2 className="mt-3">
        <strong>Steps to follow:</strong>
        <br />
        <br />
        <b>1. </b>Begin with a light dumbbell in each hand, racked at your
        shoulders, standing with feet shoulder-width apart. <br /> <br />
        <b>2. </b>Jump feet out wide and jack dumbbells straight up overhead
        until arms are fully extended. Continue with all-out effort for 20
        seconds, then rest for 10 seconds.
        <br /> <br />
        <b>3. </b>Stand with feet shoulder-width apart, dumbbells at chest.
        Begin jabbing the dumbbells across the body, alternating sides. <br />
        <br />
        <b>4. </b>Continue with all-out effort for 20 seconds, then rest for 10
        seconds. Repeat both exercises for 8 rounds total. <br />
        <br />
        <strong>Do for 25 seconds and rest for 10 seconds( 10 Sets )</strong>
        <div
          className="videoTut"
            onClick={()=> showVideo("imI08MHz8aU")}
          >
            Video Tutorial
          </div>
      </h2>

      <h1 className="mt-5">
        <strong>Golden Rule: Be consistent and Train insane</strong>
      </h1>
    </div>
  );
}

export default WeightLossExercise;
