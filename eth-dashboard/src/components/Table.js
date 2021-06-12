import React  from 'react';
import styled from 'styled-components';
import {  Table } from 'semantic-ui-react';
import { getAddressBalance } from '../api/EthAPI';
import  { useState, useEffect } from 'react';

function TableComponent({address}) {

    const [balance, setBalance] = useState(null);
  
    useEffect( async () => {
      const result = await getAddressBalance(address);
      setBalance(result)
    }, [address])
  
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>Address: {address || 'loading'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Balance: 
              </Table.Cell>
              <Table.Cell>{balance || 'fetching data'}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
  
  export default TableComponent;