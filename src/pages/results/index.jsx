import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

function Result (){
   let navigate = useNavigate();
    function handleSubmit(){
        navigate('/highscore')
    }
    return(
        <div className='resultsContainer'>
            <div className="modelResults">
            <h1 className='headerText'>All done!</h1>
            <p className='subHeaderText'>Your final score is {Number(localStorage.getItem("userScore"))}</p>
            <form  className='form' onSubmit={handleSubmit}>
            <label className='label'>Enter initials:</label>
            <input type='text' className='input' />
            <button className='submitBtn' >Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Result;
