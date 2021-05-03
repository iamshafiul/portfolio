import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SASS'} progress={'80%'} width={'70%'} />
                <SkillsSection skill={'BOOTSTRAP'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SASS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Material UI'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Express js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Firebase'} progress={'50%'} width={'60%'} />
                <SkillsSection skill={'Heroku'} progress={'50%'} width={'60%'} />
                <SkillsSection skill={'Netlify'} progress={'50%'} width={'60%'} />
                <SkillsSection skill={'Web Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web Design'}
                    text={'In today’s digital world, your website is the first interaction consumers have with your business. i am confident i can design a custom website that drives sales for your unique business.'}
                />
                <ServicesSection image={intelligence} title={'Web Development'}
                    text={'I am a highly motivated and progress-focused Web Developer with a long-standing background in this industry.Throughout the course of my career, I have perfected my web development abilities.'}
                />
                <ServicesSection image={gamedev} title={'Clean Code'}
                    text={'Clean and organized code is important to the success of your companies website and should be taken seriously. I am ensuring you your website will be clean code.'}
                />
            </div>
        </div>
    )
}

export default AboutPage;
