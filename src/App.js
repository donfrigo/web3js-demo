import React, { Component } from 'react';
import Layout from './components/Layout'
import SearchBar from "./components/SearchBar";
import Segment from './components/Segment'

class App extends Component {

    constructor() {
        super();
        this.state = {
            transactionReceipt: null
        };
    }

    onSearchChange = (input) => {
        this.setState({ transactionReceipt: input })
    }

  render() {
    const { transactionReceipt } = this.state;
    return (
      <Layout>
          <h1>
              Search for a transaction on the Rinkeby network
          </h1>
          <SearchBar searchChange={this.onSearchChange}/>
          <br />
          <Segment transactionReceipt={transactionReceipt}/>
      </Layout>
    );
  }
}

export default App;
