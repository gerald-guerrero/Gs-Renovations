import React, { Component } from 'react';
import './Home.css';
import gs1 from '../images/gs-1.jpg';
import gs2 from '../images/gs-2.jpg';
import gs3 from '../images/gs-3.jpg';
import gs4 from '../images/gs-4.jpg';
import gs5 from '../images/gs-5.jpg';
import gs6 from '../images/gs-6.png';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                
                <h1>Welcome to G's Renovations</h1>
                <p>We are a family-owned and operated home renovation business based in Atlanta, GA. With years of experience and a commitment to quality craftsmanship, we can help you transform your house into the home of your dreams.</p>
                
                <p>At G's Renovations, we pride ourselves on our attention to detail and our ability to work closely with our clients to bring their visions to life. Whether you have a specific design in mind or need help coming up with ideas, we are here to help every step of the way.</p>

                <h2>Gallery</h2>
                <p>Take a look at some of our previous projects, and don't hesitate to contact us to schedule a consultation today.</p>
                <div className="gallery">
                    <img src={gs1} alt="Project 1" />
                    <img src={gs2} alt="Project 2" />
                    <img src={gs3} alt="Project 3" />
                    <img src={gs4} alt="Project 4" />
                    <img src={gs5} alt="Project 5" />
                    <img src={gs6} alt="Project 6" />
                </div>
                
            </div>
        );
    }
}
