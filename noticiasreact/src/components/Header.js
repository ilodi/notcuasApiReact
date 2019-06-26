import React from 'react'

//componente functional
const Header = ({titulo}) => (
    <nav className="nav-weapper light-blue darken-3">
        <a className="brand-logo center" href="/">
            {titulo}
        </a>
    </nav>
)

export default Header;