import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        haserror: false
      }
    }
    static getDerivedStateFromError(error)
    {
        return {haserror: true}
    }
  render() {
    if (this.state.haserror)
    {
        return(<div>Sorry Somethingwent wrong</div>)
    }
    return this.props.children
  }
}

export default ErrorBoundry