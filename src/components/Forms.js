import React, { Component } from 'react'

 class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:''

      }
    }
    usernamehandler= event =>
    {
        this.setState({
            user: event.target.value
        })

    }
  render() {

    return (
      <div> 
        <form>
            <label>Username</label>
            <input type='text' value={this.state.user} placeholder='name' onChange={this.usernamehandler}/>
        </form>
        </div>
    )
  }
}

export default Forms