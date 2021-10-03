import * as React from "react"
import { Card } from "antd";
const RestaurentCard=(restaurent:any)=>{
    const { Meta }:any = Card;
    return(
      <div>
        <img src={restaurent.restaurent.picture} />
        </div>
  //       <div style={{height:"20px",width:"20px"}}>
  //          < Card
  //   hoverable
  //   cover={<img alt="example" src={restaurent.restaurent.picture} />}
  // >
  //   <Meta title={restaurent.restaurent.name} description="www.instagram.com" />
  // </Card>,
  //       </div>
    )
}
export default RestaurentCard