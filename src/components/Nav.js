import React from 'react';
import 'tachyons';


const Nav = ({onRouteChange}) => {
    
  return (
    
    <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <img src='https://media.licdn.com/dms/image/C4E35AQFU1ifus_QzoA/profile-framedphoto-shrink_400_400/0/1602804630540?e=1683201600&v=beta&t=9S3P6gAtaxvlHzv7kkk0OF4AyZrYOWtoUb1gVdTqyR0' className="br3 ba b--white-10 h3 w3 fr" alt="avatar"></img>
        {/* <h1 className="f5 f4-ns fw6 white-70">Alejandro Valdiviezo</h1> */}
        {/* <h2 className="f6 white-70 fw2 ttu tracked">Dublin</h2> */}
      <nav className="f6 fw6 ttu tracked">
        <a className="link dim white dib mr3 pointer" onClick={() => onRouteChange('home')} title="Home">Home</a>
        <a className="link dim white dib mr3 pointer" onClick={() => onRouteChange('experience')} title="Experience">Experience</a>
        <a className="link dim white dib mr3 pointer" onClick={() => onRouteChange('education')} title="Education">Education</a>
        <a className="link dim white dib pointer" onClick={() => onRouteChange('contact')} title="Contact">Contact</a>
      </nav>
    </header>
  
        // <header className="bg-white black-80 tc pv4 avenir">
        //   <a href="/" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
        //     <svg className="white" data-icon="skull" viewBox="0 0 32 32" ><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
        //   </a>
        //   <h1 className="mt2 mb0 baskerville i fw1 f1">Alejandro Valdiviezo</h1>
        //   <h2 className="mt2 mb0 f6 fw4 ttu tracked">Personal Page</h2>
        //   <nav className="bt bb tc mw7 center mt4">
        //     <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
        //     <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Portfolio</a>
        //     <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Shop</a>
        //     <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
        //     <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
        //   </nav>
        // </header>
    )
    
}

export default Nav;