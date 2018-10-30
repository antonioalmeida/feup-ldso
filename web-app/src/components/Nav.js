import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import FacultyAPI from '../FacultyAPI'
import Sidebar from './Sidebar'
import AddFacultyProject from "./AddFacultyProject";


class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>ImpactUP</h1>
          {/* <li><NavLink exact to="/">Home</NavLink> </li> */}
          <ul className="header">
            {
                FacultyAPI.all().map(p => (
                  <li key={p.name}>
                    <NavLink to={`/faculties/${p.name}`}>{p.name}</NavLink>
                  </li>
                ))
            }
          </ul>
          <div className = "rowC">
                <Route exact path="/" component={Home} />
                <Route path='/faculties/:faculty' component={Sidebar}/>
            <div>
              <Route path='/faculties/:faculty' component={AddFacultyProject}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;