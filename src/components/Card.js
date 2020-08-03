import React from 'react';
import './Card.css';

function Card({id, name, username, email, website}) {
  return (
    <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={'https://robohash.org/'+ id} alt='robots' />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}

export default Card;
