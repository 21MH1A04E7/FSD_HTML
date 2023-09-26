import React from "react";
import './footer.css';
const Footer=()=>{
    const date=new Date().getFullYear();
    return(
        <div className="footer1">
            <h1>copyright©{date}</h1>
        </div>
    )
};
export default Footer;