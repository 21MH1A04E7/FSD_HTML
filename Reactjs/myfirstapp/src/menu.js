import { Link } from "react-router-dom"
let ss={
    fontSize:'20px',
    display:'flex',
    textAlign:'center'
}
function Menu(){
    return(
        <div style={ss}>
            <Link to="/">Home</Link>
            <Link to="About">About</Link>
            <Link to="Contact">Contact</Link>
            <Link to="Service">Service</Link>
            <Link to="Trainees">Trainees</Link>
        </div>   
    )
}
export default Menu