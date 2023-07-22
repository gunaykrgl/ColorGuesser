import React, {useState} from "react";
import "./Card.css"

export default function Card(){
    const [input, setInput] = useState("")
    
    function handleChange(e) {
        setInput(e.target.value)        
    }
    
    return (
        <div id="container">
            <div className="box"></div>
            <input type="text" 
                value={input}
                onChange={handleChange}
                ></input>
        </div>
    )
}