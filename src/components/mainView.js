import React, { useState } from 'react';
import TodoItem from "./todoItem";

function MainView() {
    const [items, setItems] = useState([]);

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
      <div className="todolist">

          <div className="items">
            <ul>
                {items.map((item, index) => (
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