import React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"


export default function Navbar(){
    const [active, setActive] = useState(null)
    //Kilder til useLocation: https://reactrouter.com/en/main/hooks/use-location , https://medium.com/@stheodorejohn/exploring-react-router-dom-understanding-the-uselocation-hook-f67742e71c0c
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname.split("/");
        setActive(path[1]);
      }, [location]);

    return(
       <nav>
        <ul id="info">
            <Link to="/0" className={active === "0" ? "active" : ""}>HTML</Link>
            <Link to="/1" className={active === "1" ? "active" : ""}>CSS</Link>
            <Link to="/2" className={active === "2" ? "active" : ""}>Javascript</Link>
            <Link to="/3" className={active === "3" ? "active" : ""}>React</Link>
            <Link to="/4" className={active === "4" ? "active" : ""}>Sanity and headless CMS</Link>
        </ul>
       </nav>
    )
}