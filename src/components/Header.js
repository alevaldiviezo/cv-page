import React from "react";
import avatar from './avat1.jpeg';


const Header = () => {
    return(
        <header className="tc pv4 pv5-ns" style={{backgroundImage:"url("+"https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80"+")"}}>
          <img src={avatar} className="br3 ba b--black-10 h3 w3" alt="avatar"></img>
          <h1 className="f5 f4-ns fw6 black-70">Alejandro Valdiviezo</h1>
          <h2 className="f6 black-70 fw2 ttu tracked">Full Stack Developer, Dublin, Ireland</h2>
        </header>
    )
}

export default Header;