import React, { Component } from 'react'


export class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.increase=this.increase.bind(this)
    }
    increase()
    {
        this.setState({
            count:this.state.count+10000
        })
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.count}
        </h1>
        <button onClick={this.increase}>
          Click Me
        </button>   
      </div>
    )
  }
}

export default Counter2