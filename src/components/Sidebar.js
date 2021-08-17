import '../App.css';
import styled from "styled-components"
import {Link} from 'react-router-dom'
import {useState} from 'react';

function Sidebar(){
  const [links] = useState ([
    {"links":"Vaccinations","url":"vaccinations"},
    {"links":"Hospitals","url":"hospitals"},
    {"links":"Ambulance","url":"ambulance"},
    {"links":"Add Hospitals","url":"add+hospitals"},
  ])
  return(
    <SideStyle>
    <div className="link-div">
    {links.map(lin=>{
      return  <Link className="side-links" to={lin.url}i><p><b>{lin.links}</b></p></Link>
    })}
    </div>
    </SideStyle>
  )
}


const SideStyle = styled.div`

.side-links{
  text-decoration: none;
  display:block;
  font-size:140%;
  width:100%;
  color:#1E3770;
  margin-left:13%;
  font-family:'Uchen', serif;
  width:100%;
}

.side-links:hover{
  text-decoration:underline;
  color:blue;
}


`


export default Sidebar
