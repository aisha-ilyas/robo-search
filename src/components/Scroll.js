import React from 'react';

let Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid #60B917', height: '500px' }} >
            {props.children}
        </div>

    ); 
};

export default Scroll;