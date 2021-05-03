import React from 'react';
import about from '../img/shafiul.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="about" />
            </div>
            <div className="about-info">
                <h4>I am<span> Shafiul Alam</span></h4>
                <p className="about-text">
                    Front-end Web Developer.I am a highly motivated and progress-focused Web Developer with a long-standing background in this industry. My professional experience includes HTML5, CSS3, SASS, Bootstrap, JavaScript, React, Material UI, Node.js, Express.js and also MongoDB.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Shafiul Alam</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla, English</p>
                        <p>: N/A, Mejortila, Sylhet</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1_90Y4r5ZqQ0VHLtpa9ijRVoShhczGtm6/view" target="_blank" className="cv">Download Cv</a>
            </div>
        </div>
    )
}

export default ImageSection;
