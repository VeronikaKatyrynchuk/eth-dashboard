import React from 'react';
import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/4de0a5e0133c43519afc5621f823bc0e');


export const getAddressBalance = async (address) => {
    const result = await web3.eth.getBalance(address).then((res) => {
      return res
    });
    const balance = web3.utils.fromWei(result, 'ether');
    return balance;
  };
