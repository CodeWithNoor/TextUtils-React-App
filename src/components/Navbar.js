// import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


// Usually we don't change props In React Function Components
export default function Menu(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid ">
        {/* --> react router dom ---> */} 
        <Link className="navbar-brand text-dark" to = "/">{props.title}</Link>
        {/* <a className="navbar-brand text-dark" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-a active text-dark" aria-current="page" to = "/">{props.home}</Link>
              {/* <a className="nav-a active text-dark" aria-current="page" href="/">{props.home}</a> */}
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-a active text-dark" aria-current="page" to = "/about">{ props.about}</Link>
              {/* <a className="nav-a active text-dark" aria-current="page" href="/about">{ props.about}</a> */}
                
            </li>
           </ul>

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark btn-sm" type="submit">Search</button>
          </form> */}

          {/* onClick ko ik function chahiya hota hai function call nhi chahiya , cursor: 'pointer'  */}
          <div className="d-flex">
            <div className="bg-info rounded mx-2"  onClick={() => {props.toggler('info')}} style={{height: '20px', width:'20px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2" onClick={() => {props.toggler('success')}} style={{height: '20px', width:'20px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => {props.toggler('warning')}}  style={{height: '20px', width:'20px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2" onClick={() => {props.toggler('danger')}} style={{height: '20px', width:'20px', cursor: 'pointer' }}></div>
          </div>
        </div>  

        {/* template literals --> chunks form */}
        <div className={`form-check form-switch mx-5 text-dark`}>
                <input className="form-check-input" onClick={() => {props.toggler(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
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