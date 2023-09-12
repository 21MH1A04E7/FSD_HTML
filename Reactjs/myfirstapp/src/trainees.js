import Student from "./student"
function Trainees(){
    let trainees=[{
        name:'hariom',
        rollno:321,
        class:'ECE'
    },{
        name:'sujit',
        rollno:445,
        class:'CSE'
    },{
        name:'shivam',
        rollno:564,
        class:'ECE'
    },{
        name:'sri',
        rollno:998,
        class:'ECE'
    }]
    let ss={
                background:"rgb(213,145,13)",
                color:'rgb(123,21,223)',
                fontSize:'20px',
            }
    let ee={
        color:'black',
    }
    let dot={
        listStyle:'none'
    }
    return(
        <>
        <h1>student list</h1>
        {/* <table style={ss} border="1" cellSpacing={0} align="center">
            <tr style={ee}><td>S.No</td><td>Name</td><td>Rollno</td><td>Branch</td></tr>
        {
            trainees.map((ele,i)=>{
                 return <Student index={i+1} name={ele.name} roll= {ele.rollno} class={ele.class}/>
            })
            
        }
        </table>  */
        
          <ul style={dot}>
            {
                trainees.map((ele,i)=>{
                    return <Student index={i+1} name={ele.name} roll= {ele.rollno} class={ele.class}/>
               })
            }
            </ul>
          
        }
        
        </>
    )
}
export default Trainees 