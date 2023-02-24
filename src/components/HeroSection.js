import React from 'react'
import '../App.css';
import {Button} from './Button'
import './HeroSection.css';
// import {FaTwitter} from "react-icons"



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>GLSEN</h1>
            <p>Help make schools a better and safer place for LGBTQ+ Students</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/find-policies'>
                    Find Policies <i class="fa fa-search" aria-hidden="true"/>
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/add-policy'>
                    Add Policy <i className='far fa-plus-square' />
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/analyze-policies'>
                    Analyze Policies <i class="fa fa-share" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
