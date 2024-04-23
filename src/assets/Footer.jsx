import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <div className="footer">
                <div className="right">
                    <p>{currentTime.getHours()}:{(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()}</p>
                </div>
                <div className="center">
                    <p><small> <em>Wagner murath da Silva </em></small></p>
                </div>
                <div className="left">
                    <img src="src\assets\tech4me.png" height={40} alt="Logo"/> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;
