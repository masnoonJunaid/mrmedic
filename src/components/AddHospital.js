import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Register extends Component {
  render(){
    return (
      <RegisterStyler className="rightside">
      <form className="register">
        <div className="mogo-name">
        <label className="input-label" for="mogo-name" ><b>Give it a name</b></label>
        <input id="mogo-name" className="mogo-input input-field" type="text" placeholder="ex-Kolkata Medical Center"required></input>
        </div>
        <div className="middle-info">
          <label className="input-label" for ="address"> <b>Street address</b></label>
          <input className="input-field" type="text" id="address" required/>
          <label className="input-label" for ="city"><b>City/Town</b> </label>
          <input className="input-field" type="text" id="city"required/>
          <br/>
          <label className="input-label" for="landmark"> <b>Landmark</b></label>
          <input className="input-field" type="text" for="landmark"required/>
          <label className="input-label" for="pin"> <b>Pin</b></label>
          <input className="input-field" id="pin" type="text" maxLength="6" placeholder="ex-844102"required />
          <br/>
          <label className="input-label" for="number"><b>Number of Beds</b></label>
          <input id="number" type="text" maxLength = "3"placeholder="ex-4"required/>
        </div>
        <div className="owner-info middle-info">
          <h2>Provider information</h2>
          <label className="owner-details input-label" for = "fname"><b>First Name</b></label>
          <input id="fname" className="owner" type="text" required></input>
          <label className="owner-details input-label" for="lname"><b>Last Name</b></label>
          <input id="lname" className="owner" type="text" required></input>
          <br/>
          <label className="owner-details input-label" for="email" required><b>Email</b></label>
          <input className="owner" id="email" type="email" placeholder="example20@gmail.com" required></input>
          <label className="owner-details input-label" for="phone"><b>Mobile</b></label>
          <input className="owner" id="phone" maxLength = "10" type="text" required></input>
        </div>
        <input className="button" type="submit"value="Submit" required></input>
      </form>
      </RegisterStyler>
    )
  }
}

const RegisterStyler = styled.div`
.mogo-name{
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  margin-top:5%;
}

.mogo-input{
  width:40%;
  height:40px;
}
.middle-info{
  width:100%;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  flex-wrap:wrap;
  background-color:azure;
}

#number{
  height:40px;
  border:solid;
  width:10%;
  font-size:1.6em;
  text-align:center;
}

.input-label{
  margin:0.4%;
}

.input-field{
  border-radius:5%;
  border:solid;
  width:30%;
  height:40px;
  margin:3%;
  font-size:1.5em;
  text-align:center;
}

h2{
  font-family:'Lexend Peta', sans-serif;
  margin-left:2%;
}

.owner {
  border-radius:5%;
  border:solid;
  width:30%;
  height:40px;
  margin:3%;
  font-size:1.5em;
  text-align:center;
}
 .owner-info{
   margin-top:3%;
 }

 .button {
   margin-left:50%;
   width:10%;
   height:40px;
   cursor:pointer;
   color:azure;
   background-color:#0E141E;
   font-size:1.4em
 }
 .button:hover{
   color:tomato;
 }

 @media screen and (max-width:650px) {
   .input-field {
     width:80%;
   }
   .input-label{
     margin-left:0%;
     margin-right:60%;
   }

   #number{
     width:40%;
     margin-top:4%;
   }
   .owner{
     width:80%;
   }
   .owner-label{
     margin:5%;
     width:100%;
   }
   .owner-details{
     display:flex;
   }

   .button{
     width:40%
   }
 }

`
export default Register
