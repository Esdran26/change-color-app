import React, { useState } from 'react';

import ChangeColor from './components/ChangeColor';
import { dataColors } from './data/dataColors';

const App = () => {
    const [color, setColor] = useState(
        localStorage.getItem('color') || 'black'
    );

    const handleColor = id => {
        return dataColors.find(element => {
            setColor(element.color);
            localStorage.setItem('color', element.color);
            return element.id === id;
        });
    };

    return (
        <div className='container'>
            <div
                className='color-background'
                style={{
                    backgroundColor: color,
                    transition: 'all .3s ease-in-out'
                }}
            >

            </div>

            <div className='text-background'>
                <h1>Select the color</h1>
                <br />
                <br />

                <ChangeColor 
                    dataColors={ dataColors } 
                    handleColor={ handleColor }
                />
            </div>
        </div>
    );
}

export default App;