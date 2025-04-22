import React from 'react';
import './nothingFound.scss';


const NothingFound = () =>{
    return(
        <div className='searchError'>
           {/* <i class="fa-regular fa-user-magnifying-glass"></i> */}
            <div className='searchError__title'>We didn't find anyone</div>
            <div className='searchError__text'>Try againe</div>
        </div>
    )
}

export default NothingFound;