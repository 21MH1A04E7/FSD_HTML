import React from "react";
import {Link} from 'react-router-dom';
const Menu=()=>{
    return(
        <>
        <Link to="/about">about|</Link>
        <Link to="/home">home|</Link>
        <Link to="/*">Error|</Link>
        {/* <a href="/about">about|</a>
        <a href="/home">home|</a>
        <a href="/*">Error|</a> */}
        </>
    );
};
export default Menu;