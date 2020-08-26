import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla accusamus,
      aspernatur atque tempore accusantium id quaerat quas ex fugit eligendi.
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci
      voluptate, dolorem magni nam quia voluptatem natus, hic obcaecati, aliquid
      amet eum? Ipsum similique aspernatur beatae quae, aliquam obcaecati.
      Perspiciatis deleniti accusamus sunt? Molestias, possimus eum illum iure
      dignissimos corrupti, perferendis nisi vel molestiae, iusto fugit placeat.
      Tenetur, quasi dignissimos.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
