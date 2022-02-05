import React from 'react';
import { useNavigate } from 'react-router-dom';
import './results.css'

function Result (){
   let navigate = useNavigate();
    function handleSubmit(){
        navigate('../Highscore')
    }
    return(
        <div className='results'>
            <h1 className='line1'>All done!</h1>
            <p className='line2'>Your final score is</p>
            <form  className='form' onSubmit={handleSubmit}>
            <label className='label'>Enter initials:</label>
            <input type='text' id="input" />
            <button className='submit-btn' >Submit</button>
            </form>
        </div>
    )
}

export default Result;
