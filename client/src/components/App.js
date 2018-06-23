import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import Breweries from './Breweries';
import Locations from './Locations';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';

class App extends Component {
  
  render() {
    return (
      <AppContainer style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/locations' component={Locations} />
          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
 background: linear-gradient(to bottom right, aliceblue, black);
`

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
