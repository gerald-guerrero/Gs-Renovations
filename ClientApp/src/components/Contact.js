import React, { Component } from 'react';

export class Contact extends Component {
    static displayName = Contact.name;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            details: '',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/support', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        });

        if (response.ok) {
            alert('Your request has been submitted successfully!');
            this.setState({
                name: '',
                email: '',
                phone: '',
                details: '',
            });
        } else {
            alert('Failed to submit your request. Please try again later.');
        }
    };

    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <p>
                    If you have any questions or would like to schedule a consultation, please feel free to contact us using the form below. We will get back to you as soon as possible.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange} pattern="[0-9]*" required />
                    </div>
                    <div>
                        <label htmlFor="details">Details:</label>
                        <textarea name="details" id="details" value={this.state.details} onChange={this.handleInputChange} required></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
