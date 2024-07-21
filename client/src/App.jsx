import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>TodoList with React and ASP.NET</h1>
            </header>
            <AddItem />
            <ItemList />
        </div>
    );
}

export default App;
