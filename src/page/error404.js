import React from 'react'
import {Link} from 'react-router-dom'
export default function error404(){
    return(
        <div>
            <h1>ERROR, NOT FOUND</h1>
            <h2>Plz return <Link to='/'><button>Home Page</button></Link></h2>
        </div>
    )
}