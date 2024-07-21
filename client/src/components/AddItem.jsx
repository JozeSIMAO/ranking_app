import React, { useState } from 'react';
import ItemService from '../services/ItemServices';

const AddItem = () => {
    const initialItemState = {
        id: null,
        name: '',
        description: ''
    };
    const [item, setItem] = useState(initialItemState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };

    const saveItem = () => {
        var data = {
            name: item.name,
            description: item.description
        };

        ItemService.create(data)
            .then(response => {
                setItem({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description
                });
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newItem = () => {
        setItem(initialItemState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button onClick={newItem}>Add</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={item.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={item.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <button onClick={saveItem} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddItem;
