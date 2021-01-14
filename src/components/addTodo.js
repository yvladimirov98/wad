import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./todoItem";

function  AddTodo() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    return (
        <React.Fragment>
            <div className="heading">
                <h1 className="title">To-Do List</h1>
            </div>
            <input
                type="text"
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            />
            <button onClick={addItem}>Add</button>
        </React.Fragment>
    )
}

export default AddTodo;