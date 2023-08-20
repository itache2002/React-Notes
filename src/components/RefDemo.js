import React, { Component } from 'react'

 class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputref = React.createRef()
    }
    // componentDidMount()
    // {
    //     this.inputref.current.focus()
    // }
    buttonClicked = ()=>
    {
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputref}/>
      </div>
    )
  }
}

export default RefDemo