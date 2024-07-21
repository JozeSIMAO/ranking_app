import React, { useState, useEffect } from 'react';
import ItemServices from '../services/ItemServices';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        retrieveItems();
    }, []);

    const retrieveItems = () => {
        ItemServices.getAll()
            .then(response => {
                setItems(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteItem = (id) => {
        ItemServices.remove(id)
            .then(response => {
                retrieveItems();
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <h4>Item List</h4>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;