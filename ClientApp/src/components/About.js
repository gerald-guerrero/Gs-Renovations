import React, { Component } from 'react';
import './About.css';


export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <div className="AboutContainer">
                
                <h1>About G's Renovations</h1>
                <p>G's Renovations is a family-owned and operated home renovation business based in Atlanta, GA. We specialize in helping homeowners transform their living spaces into the homes of their dreams, with a focus on quality craftsmanship and attention to detail.</p>

                <h2>Our Story</h2>
                <p>Founded in 2017 by Gerardo Guerrero, G's Renovations has been serving the Atlanta area for over 5 years. Starting with just a small team of skilled craftsmen, we have grown into a full-service home renovation company with a reputation for excellence.</p>
                <p>Over the years, we have worked on projects of all sizes and scopes, from simple repairs and upgrades to complete home remodels. Our goal has always been to provide our clients with the highest level of service and workmanship, and to ensure that their renovation projects are completed on time and on budget.</p>

                <h2>Our Team</h2>
                <p>At G's Renovations, we are proud to have a team of skilled and dedicated professionals who are committed to helping our clients achieve their home renovation goals. From our experienced project managers to our talented craftsmen, each member of our team is passionate about what they do and dedicated to providing the best possible service to our clients.</p>
                <p>Our team is led by our very own founder, who brings years of experience and expertise to every project we undertake. They are committed to maintaining the high standards of quality and excellence that have become synonymous with the G's Renovations name.</p>

                <h2>Our Promise</h2>
                <p>At G's Renovations, we are committed to providing our clients with the highest level of service and workmanship. We promise to work closely with you throughout the entire renovation process, from the initial consultation to the final walkthrough, to ensure that your project meets your exact specifications and exceeds your expectations.</p>
                <p>With G's Renovations, you can trust that your home is in good hands. Contact us today to schedule a consultation and start your renovation journey.</p>
            </div>
        );
    }
}
