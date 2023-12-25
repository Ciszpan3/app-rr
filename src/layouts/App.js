import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import '../styles/App.css';
import Header from './Header'
import Nav from './Nav'
import Page from './Page'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='app'>
          <header>
            <Header/>
          </header>
          <main>
            <aside>
              <Nav/>
            </aside>
            <div className='page'>
              <Page/>
            </div>
          </main>
          <footer><Footer/></footer>
        </div>
      </Router>
      
    );
  }
}

export default App;
