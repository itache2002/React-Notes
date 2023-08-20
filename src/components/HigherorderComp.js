import React from 'react'

const HigherCompnent = OriginCompnent =>
{
  
 class NewCompnent extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      increase=()=>
      {
          this.setState( prevstate =>{
              return{ count:prevstate.count+1}
  
              }
          )
      }
      render() {
        return (
          <OriginCompnent count={this.state.count} add={this.increase}></OriginCompnent>
        )
      }
    }
    return NewCompnent
}
export default HigherCompnent