import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


// Usually we don't change props In React Function Components
export default function Menu(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        {/* --> react router dom ---> */} 
        {/* <Link className="navbar-brand" to = "/">{props.title}</Link> */}
        <a className="navbar-brand text-white" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              {/* <Link className="nav-a active" aria-current="page" to = "/">{props.home}</Link> */}
              <a className="nav-a active text-white" aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item mx-3">
              {/* <Link className="nav-a active" aria-current="page" to = "/about">{ props.about}</Link> */}
              {/* <a className="nav-a active" aria-current="page" href="/about">{ props.about}</a> */}
                
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form> */}
        </div>

        {/* template literals --> chunks form */}
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'dark' : 'light'}`}> 
          <input className="form-check-input" onClick={props.toggler} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>  
          
      </div>
    </nav>

    </>
  )
}



// ********** This is prototype ******************
// This is used for when we must need specifically DataType
// For example: We need for Our Title & About

// Navbar.propTypes ={
//     title: PropTypes.string.isRequired,
//     home: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired
// }

// default props set there is nothing throw any error but without default props set throw error

// ********** This is default prototype ********************
// Navbar.defaultProps = {
//         title: "Proptypes",
//         home: "Home",
//         about: "About section here"
// }