import React, { Component } from 'react';
import stream from 'getstream';
import logo from './logo.svg';
import './App.css';

const streamKey = 'details-in-email';
const streamAppId = 'details-in-email';
const userId = 'details-in-email';
const streamToken = 'details-in-email';

const startStream = () => {
  try {
    let subscription;
    // Connect to stream
    const client = stream.connect(streamKey, null, streamAppId);
    // Listen to feed
    const feed = client.feed('notification', userId, streamToken);
    // Subscribe to changes
    subscription = feed.subscribe(async(data) => {
      data.new.map((notification) => console.log(notification));
    });
    subscription.then(() => console.log('Client connected'));
  } catch (e) {
    console.log(e);
  }
};

class App extends Component {
  componentDidMount() {
     startStream();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
