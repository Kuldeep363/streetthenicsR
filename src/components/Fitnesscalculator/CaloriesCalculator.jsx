import React from "react";
import { useState } from "react";
import CalorieTableRow from "./CalorieTableRow";
import "./FitnessCalculator.css";

function CaloriesCalculator() {
  let [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activeScore: 0,
  });

  const calculateActiveScore = {
    0:1.2,
    1:1.4,
    2:1.6,
    3:1.75,
    4:2,
    5:2.2
  }

  let [result, setResult] = useState('');
  let [weightErr, setWeightErr] = useState(false);
  let [heightErr, setHeightErr] = useState(false);
  let [ageErr, setAgeErr] = useState(false);
  let [weightErrMsg, setWeightErrMsg] = useState("");
  let [heightErrMsg, setHeightErrMsg] = useState("");
  let [ageErrMsg, setAgeErrMsg] = useState("");
  let [btnText, setBtnText] = useState("Calculate");

  const checkWeight = (iValue) => {
    setFormData((values) => ({ ...values, weight: iValue }));
    if (iValue === "") {
      setWeightErr(true);
      setWeightErrMsg("This field cannot be empty");
    } else if (iValue.match(/[a-zA-Z~!@#$%^&*()_+<>?/:;.{}]/i)) {
      setWeightErr(true);
      setWeightErrMsg("Please enter only number");
    } else {
      setWeightErr(false);
      setWeightErrMsg("");
    }
  };
  const checkHeight = (iValue) => {
      setFormData((values) => ({ ...values, height: iValue }));
    if (iValue === "") {
      setHeightErr(true);
      setHeightErrMsg("This field cannot be empty");
    } else if (iValue.match(/[a-zA-Z~!@#$%^&*()_+<>?/:;.{}]/i)) {
      setHeightErr(true);
      setHeightErrMsg("Please enter only number");
    } else {
        setHeightErr(false);
        setHeightErrMsg("");
    }
  };
  const checkAge = (iValue) => {
    setFormData((values) => ({ ...values, age: iValue }));
    if (iValue === "") {
      setAgeErr(true);
      setAgeErrMsg("This field cannot be empty");
    } else if (iValue.match(/[a-zA-Z~!@#$%^&*()_+<>?/:;.{}]/i)) {
      setAgeErr(true);
      setAgeErrMsg("Please enter only number");
    }else if(Number(iValue)<15 || Number(iValue)>80){
        setAgeErr(true);
        setAgeErrMsg("Enter between 15 - 80");
    }else {
        setAgeErr(false);
        setAgeErrMsg("");
    }
  };

  function algo1(w,h,a,gender){
    if(gender==='male'){
      return (10*w+6.25*h-5*a+5)
    }
    return (10*w+6.25*h-5*a+5-161)
  }

  function algo2(w,h,a,gender){
    if(gender==='male'){
      return (13.397*w + 4.799*h - 5.677*a + 88.362)
    }
    return (9.247*w + 3.098*h - 4.330*a + 447.593)
  }

  function calculateCal(w,h,a,gender){
    let calPromise = new Promise((resolve,reject)=>{
      try{
        let result = ((algo1(w,h,a,gender)+algo2(w,h,a,gender))/2)*calculateActiveScore[formData.activeScore]
        setTimeout(()=>{
          resolve(result)
        },1300)
      }catch(err){ 
        reject(err)
      }
    })
    return calPromise;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // check for fields
    checkWeight(formData.weight);
    checkHeight(formData.height);
    checkAge(formData.age);
    if((!weightErr && formData.weight !== '') && (!heightErr && formData.height !== '') && (!ageErr && formData.age !== '')){
        setBtnText('Calculating...') //setting btn to Calculating
        let res =  Math.ceil(await calculateCal(formData.weight,formData.height,formData.age,formData.gender))
        setResult(res);
        setBtnText('Calculate') //setting btn to Calculate
    }
  };

  return (
    <div className="myContainer m-top">
      <div className="row m-0 justify-content-betweenpt-3 calculator">
        <div className="col-12 col-md-6 mt-4">
          <div className="stickyCalculator">
            <h1 className="heading-1">Calories Calculator</h1>
            <p>
              The Calorie Calculator can be used to estimate the number of
              calories a person needs to consume each day. This calculator can
              also provide some simple guidelines for gaining or losing weight.
            </p>
            <form
              id="cal-form"
              onSubmit={handleSubmit}
              method="post"
              className="mt-4"
            >
              <div className="form">
                <div className="row m-0 justify-content-between">
                  <div className="col-6 pl-0">
                    <div className="group-input">
                      {/* <!-- <label for="name">Your Name</label>  --> */}
                      <div className="group-field">
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          // placeholder=""
                          onChange={(e) => checkWeight(e.target.value)}
                          className={`form-control ${
                            weightErr ? "is-invalid" : ""
                          }`}
                          aria-describedby="weightErr"
                        />
                        <div className="input-icon">
                          <small>Weight</small>
                        </div>
                      </div>
                      <small
                        id="weightErr"
                        className="mt-1"
                        style={{
                          color: "red",
                          display: "block",
                          height: "20px",
                        }}
                      >
                        {weightErrMsg}
                      </small>
                    </div>
                  </div>
                  <div className="col-6 pr-0">
                    <div className="group-input">
                      {/* <!-- <label for="email">Your Email</label>  --> */}
                      <div className="group-field">
                        <input
                          type="text"
                          name="height"
                          id="height"
                          // placeholder=""
                          onChange={(e) => checkHeight(e.target.value)}
                          className={`form-control ${
                            heightErr ? "is-invalid" : ""
                          }`}
                          aria-describedby="heightErr"
                        />
                        <div className="input-icon">
                          <small>Height</small>
                        </div>
                      </div>
                      <small
                        id="heightErr"
                        className="mt-1"
                        style={{
                          color: "red",
                          display: "block",
                          height: "20px",
                        }}
                      >
                        {heightErrMsg}
                      </small>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div className="group-input">
                      {/* <!-- <label for="msg">Message</label>  --> */}
                      <div className="group-field">
                        <input
                          type="text"
                          name="age"
                          id="age"
                          // placeholder=""
                          onChange={(e) => checkAge(e.target.value)}
                          className={`form-control ${ageErr ? "is-invalid" : ""}`}
                          aria-describedby="ageErr"
                        />
                        <div className="input-icon">
                          <small>Age</small>
                        </div>
                      </div>
                      <small
                        id="ageErr"
                        className="mt-1"
                        style={{
                          color: "red",
                          display: "block",
                          height: "20px",
                        }}
                      >
                        {ageErrMsg}
                      </small>
                    </div>
                  </div>
                  <div className="col-6 pr-0">
                    <div className="group-input">
                      <div className="group-field">
                        <select
                          className="custom-select custom-select-sm"
                          id="avtiveScore"
                          onChange={(e)=>setFormData(value=>({...value,'activeScore':e.target.value}))}
                        >
                          <option value="0">
                            Little/No exercise
                          </option>
                          <option value="1">Light exercise 1-2 times/week</option>
                          <option value="2">
                            Moderate exercise 2-3 times/week
                          </option>
                          <option value="3">
                            Daily exercise/ intense exercise 3-4 times/week
                          </option>
                          <option value="4">
                            Intense exercise 6-7 times/week
                          </option>
                          <option value="5">Professional athelete</option>
                        </select>
                        {/* <div className="input-icon">
                          <small>Active level</small>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 mb-4">
                      <input type="radio" name="gender" id="m" value="male"  checked={formData.gender==='male'?true:false} onChange={()=>setFormData(value=>({...value,'gender':'male'}))} />
                      <label htmlFor="m" id="male-label" >Male</label>
                      <input type="radio" name="gender" id="f" value="female" checked={formData.gender==='female'?true:false} onChange={()=>setFormData(value=>({...value,'gender':'female'}))} />
                      <label htmlFor="f" id="female-label" >Female</label>
                  </div>
                  <div className="col-12 p-0">
                    <div className="group-input">
                      <input
                        type="submit"
                        className="primary-btn text-center"
                        id="submit-btn"
                          value={btnText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <div>
            {
              result &&
              <div className="result mb-5">
                <div className="mb-3 p-2" style={{backgroundColor:'#76e376',borderRadius:'5px'}}>
                  <strong>Maintenance Calories:</strong> {result} <small>Calories/day</small>
                </div>

                <h2><strong>Weight Loss Calories</strong></h2>
                <CalorieTableRow title={'Mild weight loss'} weight={'0.25'} result={result*0.89} />
                <CalorieTableRow title={'Weight loss'} weight={'0.5'} result={result*0.79} />
                <CalorieTableRow title={'Extra weight loss'} weight={'1'} result={result*0.58} />
                <br />
                <h2><strong>Weight Gain Calories</strong></h2>
                <CalorieTableRow title={'Mild weight gain'} weight={'0.25'} result={result*1.11} />
                <CalorieTableRow title={'Weight gain'} weight={'0.5'} result={result*1.21} />
                <CalorieTableRow title={'Extra weight gain'} weight={'1'} result={result*1.42} />
              </div>
            }
            <div>
              <h2>How calorie calculator works? How many calories i need for weight loss? How many calories i need for weight gain? </h2>
              <p>
                A calorie calculator is a tool that can help you determine how many calories you need to eat in order to maintain, gain, or lose weight. Your calorie needs are determined by a number of factors, including your age, sex, weight, height, and level of physical activity. <br />

                To use a calorie calculator, you will typically need to provide some basic information about yourself, such as your age, sex, weight, height, and activity level. The calculator will then use this information to estimate your daily calorie needs. <br />

                Once you know how many calories you need, you can use this information to plan your meals and snacks. For example, if you are trying to lose weight, you may need to eat fewer calories than you burn in order to create a calorie deficit. On the other hand, if you are trying to gain weight, you may need to eat more calories than you burn in order to create a calorie surplus. <br />

                It's important to remember that the number of calories you need is not set in stone. Your calorie needs can change over time, depending on factors such as changes in your weight, activity level, or health. Therefore, it's a good idea to use a calorie calculator regularly, so that you can adjust your intake as needed. <br />
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CaloriesCalculator;
