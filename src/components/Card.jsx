import React, {useState} from "react";
import "./Card.css"

export default function Card(props){
    const [input, setInput] = useState("")
    
    // store the correct name of the color
    const answer = props.color
    console.log(answer)
    let styles = {
        backgroundColor: `${props.color}`
    }

    function handleChange(e) {
        setInput(e.target.value)
        
        
    }
    
    return (
        <div id="container">
            <div className="box" style={styles}></div>
            <input type="text" 
                value={input}
                onChange={handleChange}
                ></input>
        </div>
    )
}