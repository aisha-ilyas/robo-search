import React from 'react';

function SearchBox({ searchEvent }) {
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchEvent}
            />
        </div>
    );
}

export default SearchBox;
