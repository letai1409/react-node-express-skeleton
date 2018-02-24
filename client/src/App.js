import React, { Component } from 'react';
import { getTopics } from './services/topic.services';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({topics: topics});
    }).catch(err => console.log('Err:', err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Topics:</h1>
          <ul>
            {
              this.state.topics.map((topic, index) => <li key={index}>{topic.name}</li>)
            }
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
