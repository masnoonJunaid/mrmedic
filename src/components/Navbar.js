import '../App.css';
import styled from "styled-components"
function Navbar(){
  return (
    <NavStyle>
    <div>
    <h1>MedApp</h1>
    {/*
      <li className="nav-list">Hospitals</li>
      <li className="nav-list">Vaccinations</li>
      <li className="nav-list">Ambulance</li>
      */}
    </div>
    </NavStyle>
  )
}


export const NavStyle = styled.div`


h1{
  font-family: 'Uchen', serif;
  color:ghostwhite;
  margin-left:20vw
}


`



export default  Navbar;
