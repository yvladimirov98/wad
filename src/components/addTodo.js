import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./todoItem";

function  AddTodo(props) {
    const [input, setInput] = useState("");
    //const [items, setItems] = useState([]);

    function addItem(event) {
        props.onSubmit(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    return (
        <React.Fragment>
            <div className="input-row">
                <div className="label">
                    <p>Enter the name of your task:</p>
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => { setInput(event.target.value) }}
                />
            </div>
            <button className="addButton" onClick={addItem}>Add</button>
        </React.Fragment>
    )
}

export default AddTodo;