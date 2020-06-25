import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, price, img_url, eaten} = props.sushi

  const buySushi = (sushiId) => {
    if (props.money >= parseInt(price)) {
      return props.sushiEaten(sushiId)
    } 
    return console.log("you poor")
  } 

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => buySushi(id)}>
        { 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi