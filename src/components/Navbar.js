import React from 'react'  //imr
import PropTypes from 'prop-types'  //impt

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>{props.title}</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-5" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5" aria-current="page" href="/">Services</a>
        </li>
      </ul>
    
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search type of text" aria-label="Search"/>
        <button classNameNameName="btn btn-danger" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    </div>
  </div> 
</nav>
  )
}
//props means properties of elements which we pass to components
//state belongs to components
Navbar.propTypes={
    title: PropTypes.string.isRequired,    //if we pass int as title then it will show error
    aboutText: PropTypes.string   //pts(shorthand)
}
Navbar.defaultProps={
    title:'Set title',
    aboutText:'about text'
}