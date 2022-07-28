import React, {useState} from "react";

function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //eliminates the default behavior of the form submittal
        e.preventDefault()
        //addColor, the form we just built, should be availabel within props
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm