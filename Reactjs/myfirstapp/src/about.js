// function About(){
//     return(
//        // inline
//         <div style={{backgroundColor:'rgb(0,34,3)',color:'yellow'}}>
//           <h1>about</h1>
//         </div>
//     )
// }
// export default About
import React, {Component} from 'react'
class about extends Component{
  render(){
  return(
    <div>
      <h1>this is about page with class Component {this.props.name}</h1>
    </div>
  )
  }
}
export default about