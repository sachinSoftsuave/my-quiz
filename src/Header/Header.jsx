import React from 'react';
import './Header.css';
 
 function Header(){

    return(
        <div className='header'>
            <a className='title1' href='./HighScore'>View Highscore <i className="fas fa-hand-point-left fa-lg"></i></a>
            <p className='title2'> Time: </p>
        </div>
    )
}

export default Header;