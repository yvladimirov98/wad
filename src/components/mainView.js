import React, { useState } from 'react';
import TodoItem from "./todoItem";

function MainView(props) {

    function removeItem(id) {
        props.onDelete(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div className="todolist">
            <div className="headingInfo">
                <h3>Your active tasks will appear below</h3>
            </div>
            <div className="items">
                <ul>
                    {props.items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            item={item}
                            onCheck={removeItem}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default MainView;