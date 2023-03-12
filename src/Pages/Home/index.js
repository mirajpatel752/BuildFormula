import { Col, Row } from "antd";
import { useState } from "react";

const Home = () => {
const [data ,setData] =useState(JSON.parse(localStorage.getItem('items')) || {})

console.log(data,"data")
const clearData = ()=>{
  alert()
  localStorage.clear()
  setData({})

}

  return (
    <>
      <div class="code">
        <Row justify={"center"}>
        <Col>
          <h3 style={{color:"#fff"}}> {data.firstName} </h3>
          <h3 style={{color:"#fff"}}> &nbsp; {data.lstName}</h3>
          </Col>
          <Col>
          <h3 style={{color:"#DB3E41"}}> &nbsp; {data.email}</h3> 
          <h3 style={{color:"#B63E98"}}> &nbsp; {data.Phone}</h3> 
          </Col>


        </Row>

        <h1>
          <span style={{color:"#97C774"}}>W</span>
          <span style={{color:"#B63E98"}}>e</span>
          <span style={{color:"#D18E62"}}>l</span>
          <span style={{color:"#DB3E41"}}>C</span>
          <span style={{color:"#97C774"}}>o</span>
          <span style={{color:"#DB3E41"}}>m</span>
          <span style={{color:" #1BABA5"}}>e</span> I speak code.
        </h1>
        <h2>/* designerReally */</h2>
        <button className="clear-button" onClick={()=>clearData()}>Clear</button> <br /> <br /> 
        <button className="clear-button"><a href="/contact">contact</a></button>
        <button className="clear-button"><a href="/task">task</a></button>



      </div>
    </>
  );
};
export default Home;
