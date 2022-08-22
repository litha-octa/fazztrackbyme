import React, { Component } from "react";
import { Route, HashRouter,Routes } from "react-router-dom";

import Landing from "./Screen/Landing";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Minicamp from "./Screen/Minicamp";
import ClassDetail from "./Screen/ClassDetail";
import Module from './Screen/Module'


class Main extends Component {
  componentDidUpdate(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0,0)}>
        <div>
          <Routes>
            <Route exact path="/*" element={<Landing/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Minicamp" element={<Minicamp/>} />
            <Route path="/Class-Detail" element={<ClassDetail/>} />
            <Route path="/Module-Belajar" element={<Module/>} />

          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Main;