import { useState } from "react";

const MultiSelect = () => {
    const [list, setList] = useState([
        {
            id: 1,
            title: "Item 01",
            isSelected: false
        }, 
        {
            id: 2,
            title: "Item 02",
            isSelected: false
        }, 
        {
            id: 3,
            title: "Item 03",
            isSelected: false
        }
    ]);

    const selectedCount = list.filter((item) => item.isSelected).length;

    const handleItemClick = (id) => {
        setList(list.map((item) => (
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
        )));
    }

    const handleSelectAll = () => {
        setList(list.map((item) => (
            { ...item, isSelected: true }
        )));
    }

    const handleUnselectAll = () => {
        setList(list.map((item) => (
            { ...item, isSelected: false }
        )));
    }

    return (
        <>
            <p>{selectedCount} selected items</p>
            <ul className="select-list">
                {list.map((item) => (
                    <li className={`select-list__item${item.isSelected ? " selected" : ""}`} key={item.id} onClick={() => handleItemClick(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <button onClick={handleSelectAll}>Select All</button>
            <button onClick={handleUnselectAll}>Clear Selection</button>
        </>
    );
}

export default MultiSelect;