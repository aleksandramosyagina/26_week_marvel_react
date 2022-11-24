import React from 'react';

import '../../style/App.css';
import './App.css';
import Marvel from '../../components/Marvel'
import data from '../../data/data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          data.map((hero) =>
            <Marvel name={hero.name}
              Universe={hero.Universe}
              alter_ego={hero.alter_ego}
              who={hero.who}
              friends={hero.friends}
              power={hero.power}
              photo={hero.photo}
              description={hero.description}
            ></Marvel>
          )
        }


      </div>
    );

  }
}

export default App;
