import React from "react";
import './headerstyle.css';

function Footer1(){
    const date=new Date();
    const year=date.getFullYear();
    return(
        <footer>
            <p>copy right &#169; {year}</p>
        </footer>
    )
}
export default Footer1;