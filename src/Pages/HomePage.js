import React from 'react';
import {faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Shafiul Alam</span>
                </h1>
                <p>
                Front-end Web Developer. I am a highly motivated and progress-focused Web Developer with a long-standing background in this industry. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/live.shafiul" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </a>
                    <a href="https://github.com/shafiulmmc" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <a to="https://www.linkedin.com/in/shafiul-alam-162ab2167/" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
