import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  const sushiSubset = () => {
    return props.sushis.slice(props.currentSushi, props.currentSushi+4)
  }

  const renderSushi = (sushiSubset) => {
    return sushiSubset.map(sushi => <Sushi key={sushi.id} sushi={sushi} sushiEaten={props.sushiEaten} money={props.money}/>)
  }
  
  return (
    <Fragment>
      <div className="belt">
        {renderSushi(sushiSubset())}
        <MoreButton nextSushis={props.nextSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer