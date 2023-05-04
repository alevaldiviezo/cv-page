import React from "react";
import Card from "./Card";

const Content = ({parts, onRouteChange}) => {
    
    return(
        <div 
        // className='flex-container' 
        // style={{display:"flex", flexDirection:"row" }}
        >
            <ul>
            <h3>Brief</h3>
        <p>Graduated from Higher Diploma in Computer in Science NFQ-Level 8. Industrial Engineering background, focused on a change career oriented to the IT sector. I finished a Higher Diploma in Science and Computing. Experience in business management and consulting, integrate management, environment, health and safety, and oil industry. Living in Ireland since 2018 studying English language in different schools and completing my Higher Diploma</p>
                    
            {
                parts.map((part,i) => {
                    return(
                        <div>
                        
                    
                        <Card
                        key={i}
                        name={parts[i].name}
                        image={parts[i].image}
                        onRouteChange={() => onRouteChange(parts[i].label)}
                        />
                    </div>
                    )
                })
            }
            </ul>
        </div>

    // <section className="tc pa3 pa5-ns">
    //     <article className="hide-child relative ba b--black-20 mw5 center">
    //       <img src="https://pbs.twimg.com/profile_images/805079287057485824/XKM1WLfz_400x400.jpg" className="db" alt="home" />
    //       <div className="pa2 bt b--black-20">
    //         <a className="f6 db link dark-blue hover-blue" href="/">Jesse Grant</a>
    //         <p className="f6 gray mv1">5 mutual friends</p>
    //         <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="/">Add Friend</a>
    //       </div>
    //       <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="/">×</a>
    //     </article>
    // </section>
        

    )
}

export default Content;