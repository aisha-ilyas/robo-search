import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    return (
        <div>
            {
                robots.map((item, i) => {
                return (
                    <Card 
                        key={'1'+i} 
                        id={item.id} 
                        name={item.name} 
                        username={item.username} 
                        email={item.email} 
                        website={item.website}/>
                );
                })      
            }
        </div>
    );
}

export default CardList;