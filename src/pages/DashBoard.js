import React, { useState } from 'react';
import NavSideBar from '../component/NavSideBar';

const DashboardPage = () => {
    // Sample state variables
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('');

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <NavSideBar>
            <div>
                <h1>Welcome to the Dashboard!</h1>
                <div>
                    <h2>Counter: {counter}</h2>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
                <div>
                    <h2>Username: {username}</h2>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
            </div>
        </NavSideBar>
    );
};

export default DashboardPage;
