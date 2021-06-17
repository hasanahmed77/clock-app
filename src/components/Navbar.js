import React from 'react';
import Stopwatch from '../images/stopwatch.svg';
import Timer from '../images/timer.svg';
import Clock from '../images/clock.svg';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><img src={Clock} alt="Clock" /></a>
            <a href="/stopwatch"><img src={Stopwatch} alt="Stopwatch" /></a>
            <a href="/timer"><img src={Timer} alt="Timer" /></a>
        </div>
    )
}

export default Navbar
