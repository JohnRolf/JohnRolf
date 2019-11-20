import * as React from "react";
import './Header.css'

export const Header: React.FC<{}> = () => {
    return (
    <div className={"jrss-header-container"}>
        <div className={"jrss-header-image-container"}>
            <img alt={"Rolf"} className={"jrss-header-img"} src="./Rolf.jpg" />
        </div>
        <div className={"jrss-header-content"}>
            <div>
                <h1>Johnathon Rolf - Software Solutions</h1>
                <p>
                    I'm currently a full time software engineer for Spok in Eden Prarie, Minnesota where I serve as an engineering lead. This website
                    is a playground I use to try out new or develop my skills with existing technology. I very infrequently update it. If you are looking
                    to contact me in a business capacity please do so through my LinkedIn page or my  
                    <a style={{margin: "0 0 0 5px"}} href="mailto:johnrolf.softwaresolutions@gmail.com">email address</a>.
                </p>
            </div>
            <div>
                <h2>
                    Tech Blog
                </h2>
                <p>
                    I occasionally write my thoughts about technology and store them in documents on the internet. Some refer to this as a blog. If you have any
                    interest in my thoughts about technology you can read them <a href="/#">here</a>. 
                </p>
            </div>
            <div>
                <h2>
                    Personal Blog
                </h2>
                <p>
                    I also exist outside the world of technology sometimes. Sometimes I write down things that happen to me and how i feel about them and
                    store them in a different blog. If for some reason you feel the need to read things I think about, give it a look <a href="/#">here</a>. 
                </p>
            </div>
            <div style={{fontStyle: "italic"}}>
                <h4>
                    Disclaimer
                </h4>
                <p>
                Any opinions, perceived or expressed, on this website are soley my own and in no way represent any other organization referenced anywhere
                on this domain. Basically if you see it here, it's all me. I don't represent anyone in any capcity on this website.
                </p>
            </div>
        </div>
    </div>
    )
};
