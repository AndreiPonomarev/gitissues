import React from 'react';
import Searchbar from './Searchbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;