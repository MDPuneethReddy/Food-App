import { Col, Row } from "antd"
import axios from "axios";
import React, { useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard";
const ViewCards=()=>{
    const [data,setData]=useState<Array<any>>([])
    const style = { background: '#0092ff', padding: '8px 0' };
useEffect(() => {
   axios.get("http://localhost:4000/payload").then(response=>{
       console.log(response)
       setData(response.data)
   }).catch(error=>{
       console.log(error)
   })
}, [])    
return(
    <div >
        <Row style={{height:"10%"}}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data.map((item:any)=>{

            return(
            
            <Col className="gutter-row" span={6}>
            <div><RestaurentCard restaurent={item}/></div>
            </Col>
         
            )
        })}
         </Row>
    </div>
)
}
export default ViewCards