import React, { Component } from 'react'
import HigherCompnent from './HigherorderComp'

export class HowerCounter extends Component {
    
  render() {
   const {count, add}=this.props
    return (
      <div>
        <h1 onMouseOver={add}>Hower this many Times {count}</h1>
      </div>
    )
  }
}

export default HigherCompnent(HowerCounter)