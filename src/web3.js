import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/<ACCESS TOKEN>'
    );
    web3 = new Web3(provider);

}

export default web3;