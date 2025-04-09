import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <div className='header'>
            <img className='logo' src='logo.png' alt='MovieDux'/>
            <h2 className='app-subtitle'>Its time for popcorn!Add your movie list</h2>
        </div>
    );
}