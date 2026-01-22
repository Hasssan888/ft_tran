import { useState } from "react"

export default function From() {

    const [fromInput, setFromInput] = useState({name:"", email: "", age: ""});

    function handleClick() {
        console.log(fromInput);
    }
    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <label>Name: </label>
            <input type="text" value={fromInput.name} 
                onChange={(event) => {
                    setFromInput({ ...fromInput,name: event.target.value});
                }}
            />
            <hr />
            <label>Email: </label>
            <input type="text" 
                value={fromInput.email}
                onChange={(event) => {
                    setFromInput({...fromInput, email: event.target.value});
                }}
            />
            <hr />
            <label>Age: </label>
            <input type="text" 
                value={fromInput.age}
                onChange={(event) => {
                    setFromInput({ ...fromInput, age: event.target.value});
                }}
            />
            <hr />
            <button
                onClick={handleClick}
            >
                submit
            </button>
        </form>
        
    )
}