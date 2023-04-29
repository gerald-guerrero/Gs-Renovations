import React, { Component } from 'react';
import './Services.css';

export class Services extends Component {
    static displayName = Services.name;

    render() {
        return (
            <div className="ServicesContainer">
                <h1>Our Services</h1>
                <p>At G's Renovations, we offer a wide range of home renovation services to help you create the home of your dreams. Our team of experts is dedicated to providing quality craftsmanship and exceptional customer service to every client. Below are some of the services we offer:</p>

                <div className="services">
                    <div className="service">
                        <h3>Kitchen Remodel</h3>
                        <p>From minor updates to a complete overhaul, our team can help you create the kitchen of your dreams.</p>
                    </div>
                    <div className="service">
                        <h3>Bathroom Remodel</h3>
                        <p>We can help you create a luxurious and functional bathroom that meets your needs and style.</p>
                    </div>
                    <div className="service">
                        <h3>Flooring</h3>
                        <p>Whether you want to install new hardwood floors, tile, or carpet, we can help you choose the right materials and create the perfect look for your home.</p>
                    </div>
                    <div className="service">
                        <h3>Appliance Installation</h3>
                        <p>We can help you install new appliances, from refrigerators and ovens to washing machines and dryers.</p>
                    </div>
                    <div className="service">
                        <h3>Electrical Troubleshooting</h3>
                        <p>Our team can diagnose and fix electrical issues, ensuring that your home is safe and functional.</p>
                    </div>
                    <div className="service">
                        <h3>HVAC</h3>
                        <p>Our experienced technicians can help you with all your HVAC needs, from installation to maintenance and repair.</p>
                    </div>
                    <div className="service">
                        <h3>Home Repairs</h3>
                        <p>We can tackle all of your home repair needs, from minor repairs to major renovations.</p>
                    </div>
                    <div className="service">
                        <h3>Painting</h3>
                        <p>Our team of professional painters can help you choose the perfect colors and finishes to transform your home.</p>
                    </div>
                </div>
            </div>
        );
    }
}
