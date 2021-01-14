import React from "react";

function TodoItem({ id, item, onCheck }) {
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            <div className="todoItem">
                {item}
                <p className="helperLabel">Click me to close me!</p>
            </div>
        </li>
        </>
    )
}
export default TodoItem;