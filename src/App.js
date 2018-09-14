import React, { Component } from 'react';
import Layout from './components/Layout'
import SearchBar from "./components/SearchBar";
import Segment from './components/Segment'

class App extends Component {

    constructor() {
        super();
        this.state = {
            output: null
        };
    }

    onSearchChange = (input) => {
        this.setState({ output: input })
    }

  render() {
    const { output } = this.state;
    return (
      <Layout>
          <h1>
              Search for a transaction on the Rinkeby network
          </h1>
          <SearchBar searchChange={this.onSearchChange}/>
          <br />
          <Segment transactionReceipt={output}/>
      </Layout>
    );
  }
}

export default App;
