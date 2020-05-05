import {Link} from 'react-router-dom'
import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
        // <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-dark">
          {/* <!-- Home Button --> */}
          <Link to='/'class="navbar-brand">Eat Me Team</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- End Home button --> */}
          {/* <!-- Start Navbar button --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">

                <li class="nav-item active">
                    <Link to='/' class="nav-link active">Home</Link>
                </li>

                {/* <!-- Member --> */}
                <li class="nav-item dropdown active">
                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Member
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to='/pp' class="dropdown-item">PP</Link>
                    <div class="dropdown-divider"></div>
                    <Link to='/tong' class="dropdown-item">Tong</Link>
                    <div class="dropdown-divider"></div>
                    <Link to='/tim' class="dropdown-item">Tim</Link>
                    </div>
                </li>
                {/* <!-- End Member --> */}
                {/* <!-- Workshop --> */}
                <li class="nav-item dropdown active">
                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Workshop
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/290420">29 APRIL 2020</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="/20520">2 MAY 2020</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="/40520">4 MAY 2020</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="/90520">9 MAY 2020</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="/160520">16 MAY 2020</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="/230520">23 MAY 2020</Link>
                    </div>
                </li>
                {/* <!-- End Workshop --> */}
              </ul>
              {/* <!-- Github --> */}
              <ul class="navbar-nav mr-right" >
                <li class="topbar-right active" style={{marginTop: '-5%', marginBottom: '-5%'}}>
                  <a class="nav-link" href="https://github.com/eatmeteam/eatmeteam.github.io" rel="noopener noreferrer" target="_blank"><img class="rounded-circle" style={{width: "100px"}} src="https://drl.chaosforge.org/images/GitHub_Logo.png" alt="Github-logo"/></a>
                </li>
              </ul>
              {/* <!-- End Github --> */}
          </div>
          {/* <!-- End Navbar button --> */}
        </nav>
        // <!-- End Navigation Bar -->
    )
  }
}
