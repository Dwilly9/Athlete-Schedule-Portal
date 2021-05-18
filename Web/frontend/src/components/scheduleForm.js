import React, { useState } from "react";
import { Dropdown1, Dropdown2, Facility, Time } from "./Dropdown";

const ScheduleForm = ({show}) => {
  const [facilValue, setfacilValue] = useState("");
  const [timeValue, settimeValue] = useState("");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setfacilValue(e.target.value);
  };
  
 
  const handleSelect2 = (f) => {
    console.log(f.target.value);
    settimeValue(f.target.value);
  };

  
// display flex on the outer div
  return (
    <div className = "outer-style">
        
      <div className = "top">

      <Dropdown1
      formLabel="Add an Event"
     
        buttonText="Send form" 
        onChange={handleSelect} //handles the selected data
  
      >
        <Facility selected value="Select Facility" /> 
        <Facility value="Mckenna Gym" />
        <Facility value="Sullivan gym" />
        <Facility value="Mckenna Weight Room" />
        <Facility value="Mckenna upper-level track" />
        <Facility value="DSG field" />
        <Facility value="Softball Field" />
        <Facility value="Baseball Field" />
        <Facility value="Soccer Field" />

      </Dropdown1>

      </div>
      
<div className = "bottom">
<Dropdown2 
      onChange={handleSelect2} 
      action="https://jsonplaceholder.typicode.com/posts" //placeholder for where the form takes the user
      >

        <Time selected value ="Select Time" />
        <Time value ="1:00pm" />
        <Time value ="2:00pm" />
        <Time value ="3:00pm" />
        <Time value ="4:00pm" />
        <Time value ="5:00pm" />
        <Time value ="6:00pm" />
        <Time value ="7:00pm" />
        <Time value ="8:00pm" />
        <Time value ="9:00pm" />
        <Time value ="10:00pm" />
        <Time value ="11:00pm" />
        <Time value ="12:00pm" />
        <Time value ="1:00am" />
        <Time value ="2:00am" />
        <Time value ="3:00am" />
        <Time value ="4:00am" />
        <Time value ="5:00am" />
        <Time value ="6:00am" />
        <Time value ="7:00am" />
        <Time value ="8:00am" />
        <Time value ="9:00am" />
        <Time value ="10:00am" />
        <Time value ="11:00am" />
        <Time value ="12:00am" />
        </Dropdown2>

</div>
      
     

      

      <p>You selected {facilValue} at {timeValue}</p> 
    
    </div>
  ); 
}
export default ScheduleForm;