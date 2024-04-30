import React, { useState, useEffect } from 'react';

const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        windowX: window.innerHeight,
        windowY: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowX: window.innerHeight,
                windowY: window.innerWidth
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h1>Window size</h1>
            <p>Width: {windowSize.windowY}px</p>
            <p>Height: {windowSize.windowX}px</p>
        </div>
    );
};

export default WindowSize;
