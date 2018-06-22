import React from 'react';
import axios from 'axios';
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { beers: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        this.setState({ beers: res.data }) 
      })
  }

  render() {
    const { entries } = this.state.beers;
    // debugger
    return(
      <Container>
        <Header as="h1" textAlign="center">Beers</Header>
          <Card.Group itemsPerRow={3}>
            { entries.map( beer =>
              <Card key={beer.id}>
                <Card.Content>
                  {beer.name}
                </Card.Content>
                <Card.Content>
                  {beer.description}
                </Card.Content>
                <Button>
                  View Beer
                </Button>
              </Card>
            ) }
          </Card.Group>
      </Container>
    )
  }
}

export default Beers;