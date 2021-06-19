import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateClock = () => {
        setTime((new Date().toLocaleTimeString()));
    }

    setInterval(updateClock, 1000);

    return (
        <div className="clock">
            {time}
        </div>
    )
}

export default Home;
