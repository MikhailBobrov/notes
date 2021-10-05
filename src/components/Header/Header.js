import React from "react";
import PropTypes from 'prop-types' // проверка типов
import './Header.css';
import { Nav } from "../Nav/Nav";
import logo from './logo.png'

function Header({title , nav}) {
    return (
        <div className="header">
            <div className='header__container'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className='header__title'>{ title }</h1>
            </div>

            <Nav nav={nav}/>
        </div>
    );
}


Header.defaultProps = {
    title : 'Notes Application'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// дефолтные стили
const headingStyle = {
    color: 'darkblue',
    backgroundColor: 'grey'
}

export default Header;
