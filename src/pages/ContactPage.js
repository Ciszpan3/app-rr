import React, { Component } from 'react';
import '../styles/ContactPage.css';

class ContactPage extends Component {
    state = {
        value: ''
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Napisz coś</h2>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder='Wpisz coś...'></textarea>
                    <button>Wyślij</button>
                </form>
            </div>
        );
    }
}

export default ContactPage;