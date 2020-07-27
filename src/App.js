import React, { useState } from 'react';

import Theme from './constants/Theme';

import {
  MainTitle,
  Title,
  Subtitle,
  Strong,
  Text,
  Button,
  Row,
  Column,
} from './components';

function App() {
  const [power, setPower] = useState(false);

  const clickHandler = () => {
    setPower(!power ? true : false);
  };

  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <MainTitle>Elemrary!</MainTitle>
        </header>
        <main>
          <Title>Title</Title>

          <Column style={{ borderRadius: '20px' }} bg="purple" color="white">
            <Subtitle>Column</Subtitle>
            <Text>
              Text 1 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>

            <Text>
              Text 2 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>

            <Text>
              Text 3 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>
          </Column>

          <Row>
            <Subtitle>Row</Subtitle>
            <Text>
              Text 1 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>

            <Text>
              Text 2 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>

            <Text>
              Text 3 blablabla <Strong>Strong</Strong> blablbasd{' '}
            </Text>
          </Row>

          <Button
            id="button-id"
            className="button-class"
            text={power ? 'on' : 'off'}
            onClick={() => {
              clickHandler();
            }}
            mode={power ? 'success' : null}
          />
        </main>
      </div>
    </Theme>
  );
}

export default App;
