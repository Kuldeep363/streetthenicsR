import React from "react";

function CalorieTableRow({ title, weight, result }) {
  return (
    <div className="row m-0 mt-2 mb-2 p-2" style={{backgroundColor:'#f6f6f6',borderRadius:'5px'}}>
      <div className="col-8">
        <strong className="mb-0">{title}</strong> <br />
        <small>{weight}kg/week</small>
      </div>
      <div className="col-4">
        <p>{Math.ceil(result)}</p>
        <small>Calories/day</small>
      </div>
    </div>
  );
}

export default CalorieTableRow;
