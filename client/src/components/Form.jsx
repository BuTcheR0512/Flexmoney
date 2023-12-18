import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import logo from '../assests/logo.png';

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    age: "", 
    gender: "",
    contact: "",
    fee: "500",
    slot: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [submit, isSubmit] = useState(false);

  function hadleChange(e) {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function submitUser(e) {
    e.preventDefault();
    const errors = validate(user);

   
    if (user.fee !== "500") {
      errors.fee = "Fee is 500!";
    }
  
    setError(errors);
    isSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
   
      const currentDate = new Date();
      const enteredDate = new Date(user.age);
      const age = currentDate.getFullYear() - enteredDate.getFullYear();
      
     
      const userData = {
        ...user,
        age: age.toString(), 
      };

      axios.post("https://yoga-1o5t.onrender.com/submit", userData).then((res) => console.log(res.data));

      setUser({
        name: "",
        age: "",
        gender: "",
        contact: "",
        fee: "500",
        slot: "",
      });
      setSuccess(true);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    if (!user.name) {
      errors.name = "Name is required!";
    }
    if (!user.age) {
      errors.age = "Date of birth is required!";
    } else {
      const currentDate = new Date();
      const enteredDate = new Date(user.age);
      const age = currentDate.getFullYear() - enteredDate.getFullYear();

      if (age < 18 || age > 65) {
        errors.age = "Age must be between 18 and 65 years!";
      }
    }
    if (!user.gender) {
      errors.gender = "Gender is required!";
    }
    if (!user.contact) {
      errors.contact = "Contact is required!";
    } else if (
      parseInt(user.contact) < 1000000000 ||
      parseInt(user.contact) > 9999999999 ||
      user.contact < "1000000000" ||
      user.contact > "9999999999"
    ) {
      errors.contact = "Contact must be equal to 10 digits!";
    }
    if (!user.slot) {
      errors.slot = "Select a slot!";
    }
    if (user.fee !== "500") {
        errors.fee = "Fee is 500";
      }  
    
    return errors;
  };

  return (
    <div className="box">
      <form autoComplete="off">
        <div className="heading">
        <img src={logo} alt="Logo" className="logo" />
          <h1>{success ? "Payment Successful" : "Admission Form"}</h1>
        </div>
        {!success && (
          <div className="name">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={user.name}
              onChange={hadleChange}
            ></input>
          </div>
        )}
        {!success && <p className="error">{error.name}</p>}
        {!success && (
          <div className="age">
            <label>Date of Birth: </label>
            <input
              type="date"
              name="age"
              value={user.age}
              onChange={hadleChange}
            ></input>
          </div>
        )}
        {!success && <p className="error">{error.age}</p>}
        {!success && (
          <div className="gender">
            <label>Gender: </label>
            <select
              name="gender"
              value={user.gender}
              onChange={hadleChange}
            >
              <option value="" className="gender">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        )}
        {!success && <p style={{ color: 'red' }}>{error.gender}</p>}
        {!success && (
          <div className="contact">
            <label>Contact: </label>
            <input
              type="text"
              placeholder="Your Contact Number"
              name="contact"
              value={user.contact}
              onChange={hadleChange}
            ></input>
          </div>
        )}
        {!success && <p className="error">{error.contact}</p>}
        {!success && (
          <div className="slot">
            <label>Slot: </label>
            <select name="slot" value={user.slot} onChange={hadleChange}>
              <option className="option1">Pick a slot</option>
              <option>6-7 AM</option>
              <option>7-8 AM</option>
              <option>8-9 AM</option>
              <option>5-6 PM</option>
            </select>
          </div>
        )}
         {!success && <p className="error">{error.slot}</p>}
        {!success && (
          <div className="fee">
            <label>Fee: </label>
            <input
              type="text"
              placeholder="Enter Amount"
              name="fee"
              value={user.fee}
              onChange={hadleChange}
            ></input>
             {error.fee && <p className="error">{error.fee}</p>}
          </div>
        )}
       
       
        {!success && (
          <div className="btn">
            <button type="submit" onClick={submitUser}>
              Make Payment{" "}
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
