import React from 'react';
import './navigation.scss';

const Navigation = () =>{
    return(
        <div className='navigation'>
            <span className='navigation__title'>Поиск</span>
            <div className='navigation__search'>
            <span className='navigation__search_icon'><i class="fa-solid fa-magnifying-glass"/></span>
            <input type="text" value="Search by name, tag or email" className='navigation__search_input' />
            <button className='navigation__search_btn'><i class="fa-solid fa-signal"/></button>
            </div>
            
            <div className='navigation__conteiner'>
                <button className='navigation__conteiner_btn'>Все</button>
                <button className='navigation__conteiner_btn'>Designers</button>
                <button className='navigation__conteiner_btn'>Analysts</button>
                <button className='navigation__conteiner_btn'>Managers</button>
                <button className='navigation__conteiner_btn'>IOS</button>
                <button className='navigation__conteiner_btn'>Android</button>
            </div>

        </div>

    )
}

export default Navigation;