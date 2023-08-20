import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent()
    {
        alert(`Hello ${this.state.name}`)
    }
  render() {
    return (
      <div>
        <ChildComp Handlar={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComp