import { Container } from 'semantic-ui-react';
import TableComponent from './components/Table';
import Title from './components/Title';


const ADDRESS = '0xA145ac099E3d2e9781C9c848249E2e6b256b030D';

function App() {
  return (
    <Container>
      <Title>Ethereum Dashboard</Title>
      <TableComponent address={ADDRESS} />
    </Container>
  );
}

export default App;
