import React, { Component } from 'react'
import HigherCompnent from './HigherorderComp'

 class Newcounter extends Component {
   
  render() {
    const {count,add} =this.props
    return (
        
    <div>
        <button onClick={add}>
            The clicks is {count}
        </button>
      </div>
    )
  }
}

export default  HigherCompnent(Newcounter) 