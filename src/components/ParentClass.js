import React, { Component } from 'react'
import RefDemo from './RefDemo'

 class ParentClass extends Component {
    constructor(props) {
      super(props)

      this.refexample =React.createRef()
    }
    clickHandler=()=>
    {
        this.refexample.current.buttonClicked()
    }

  render() {
    return (
      <div>
        <RefDemo ref={this.refexample}/>
        <button onClick={this.clickHandler}> 
            Focus on input
        </button>
      </div>
    )
  }
}

export default ParentClass