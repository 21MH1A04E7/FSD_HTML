// function Student(){
//     let name='hariom'
//     let ss={
//         background:"red",
//         color:'pink'
//     }
//     return(
//         <div>
//             <h1 style={ss}>Student name is {name}</h1>
//         </div>
//     )
// }
// export default Student
function Student(props){
    // let ss={
    //     background:"red",
    //     color:'pink'
    // }
   
    return(
        // <div>
        //     <h1 style={ss}>Student name is {props.name}</h1>
        //     <h1 style={ss}>Student rollno is {props.roll}</h1>
        // </div>
        <>
            {/* <tr><td>{props.index}</td><td>{props.name}</td><td>{props.roll}</td><td>{props.class}</td></tr> */
                <li>{props.name} {props.roll} {props.class}</li>
            }
        </>
    )
}
export default Student