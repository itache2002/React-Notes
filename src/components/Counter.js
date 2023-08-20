import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0
        }

        this.numberUp = this.numberUp.bind(this)
    }

    numberUp(){
        this.setState({
            count:this.state.count+1
        })
    }
    numberdown(){
        this.setState({
            count:this.state.count-1
        })
    }
    
    // NumberUp = () =>
    // {
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
    

  render() {
    return (
      <div>
       <h1>counter</h1> 
       <p>
        {this.state.count}
       </p>
        <button onClick={this.numberUp}>+</button>
        <button onClick={() => this.numberdown()}>-</button>
    </div>
    )
  }
}

export default Counter