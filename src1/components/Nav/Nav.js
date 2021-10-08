import PropTypes from 'prop-types' // проверка типов
import './Nav.css';

function Nav( { nav } ) {

    return (
        <div className='nav'>
            <ul className='nav__list'>
                {nav.map(item => {
                    return <li style={navStyle} className='nav__item' key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
}

const navStyle = {
    cursor: 'pointer'
}

export { Nav };