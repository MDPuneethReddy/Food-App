import { Col, Row } from "antd"
import React from "react"
import RestaurentCard from "./RestaurentCard";
export default function ViewCards(){
    const data:Array<any>=[
        {
            "id":1,
            "name":"one",
            "picture":""
        },
        {
            "id":2,
            "name":"two",
            "picture":""
        },
        {
            "id":3,
            "name":"three",
            "picture":""
        },
        {
            "id":4,
            "name":"four",
            "picture":""
        }
    ]
    const style = { background: '#0092ff', padding: '8px 0' };
    
return(
    <div>
        {data.map((item:any)=>{
            return(
            <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
            <div ><RestaurentCard /></div>
            </Col>
          </Row>
            )
        })}
    </div>
)
}