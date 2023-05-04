import React from "react";

const Contact = () => {
    return(
        <div className="pa3 pa5-ns">
        <h1>Contact</h1>
        
          {/* <h4 className="f6 fw6">Glossary</h4> */}
          <dl className="f6 lh-title mv2">
            <dt className="dib b">Email:</dt>
            <dd className="dib ml0 gray">alevaldiviezo@gmail.com</dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b">LinkedIn:</dt>
            <dd className="dib ml0 gray"><a href="https://www.linkedin.com/in/alejandro-valdiviezo-b085272b/" className="link underline blue hover-orange">https://www.linkedin.com/in/alejandro-valdiviezo-b085272b/</a></dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b">GitHub:</dt>
            <dd className="dib ml0 gray"><a href="https://github.com/alevaldiviezo" className="link underline blue hover-orange">https://github.com/alevaldiviezo</a></dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b">Discord:</dt>
            <dd className="dib ml0 gray">AleVal#2389</dd>
          </dl>
          <dl className="f6 lh-title mv2">
            <dt className="dib b">Home:</dt>
            <dd className="dib ml0 gray">Dublin, Ireland</dd>
          </dl>
          
        </div>

    )
}

export default Contact;