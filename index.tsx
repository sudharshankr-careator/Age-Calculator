import React, { Component } from 'react';
import { render } from 'react-dom';
import Calculate_age from './calculator';
import Hello from './Hello';
import './style.css';
import Year from './yaer';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Calculate_age />
        {/* <Year /> */}
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
