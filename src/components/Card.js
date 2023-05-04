import React from "react";
import 'tachyons';

const Card = ({name, image, onRouteChange}) => {
    return(

        <li
          class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img class="w2 h2 w3-ns h3-ns br-100" src={image} />
            <div class="pl3 flex-auto">
              <span class="f6 db black-70">Mrmrs</span>
              <span class="f6 db black-70">{name}</span>
            </div>
            <div>
              <a onClick={() => onRouteChange()} class="f6 link blue hover-dark-gray">{name}</a>
            </div>
        </li>
        // <div class="dt mw6 center pv4 pv5-m pv6-ns">
        //   <div class="dtc v-mid">
        //     <img src={image} alt="A bright blue sky" class="mw5" />
        //   </div>
        //   <div class="dtc v-mid pl3">
        //     <p class="lh-copy">
        //       {name}
        //     </p>
        //   </div>
        // </div>

        // <section className="tc pa3 pa5-ns">
        // <article className="hide-child relative ba b--black-20 mw5 center">
        //   <img src={image} className="db" alt="home" />
        //   <div className="pa2 bt b--black-20">
        //     <a className="f6 db link dark-blue hover-blue" href="/">{name}</a>
        //     {/* <p className="f6 gray mv1">5 mutual friends</p>
        //     <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="/">Add Friend</a> */}
        //   </div>
        //   <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="/">×</a>
        // </article>
        // </section>
    )
    
}

export default Card;