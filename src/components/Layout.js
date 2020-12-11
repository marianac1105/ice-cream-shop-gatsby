import React from 'react'
import Header from "./Header"
import  "../styles/index.css"


export default function Layout(props) {
    return (
        
        <div>
            <Header/>
            
{props.children}
/</div>

    )
}
