import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const darkTheme = () => {
  console.log(`Theme changed to Dark`);
}

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dropdownMenu}
              </a>
              <ul className="dropdown-menu">
                <li onClick={darkTheme}><a className="dropdown-item" href="/">{props.Action1}</a></li>
                <li><a className="dropdown-item" href="/">{props.Action2}</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">{props.Action3}</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class={`form-check form-switch mx-2 text-${props.mode===`light`?`dark`:`light`}`}>
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode===`light`?`dark`:`light`}`} for="flexSwitchCheckDefault">{`${props.mode===`light`?`dark`:`light`}`} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownMenu: PropTypes.string,
  Action1: PropTypes.string,
  Action2: PropTypes.string.isRequired,
  Action3: PropTypes.string.isRequired,
}
// Navbar.defaultProps={
//   title:"Title",
//   Action1:"List Item 1",
//   Action2:"List Item 2",
//   Action3:"List Item 3",
// }

export default Navbar
