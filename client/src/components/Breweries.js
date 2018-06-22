import React from 'react';
import axios from 'axios';
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { breweries: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({ breweries: res.data }) 
        console.log(res)
      })
  }

  render() {
    const { entries } = this.state.breweries;
    // debugger
    return(
      <Container>
        <Header as="h1" textAlign="center">Breweries</Header>
          <Card.Group itemsPerRow={3}>
            { entries.map( brewery =>
              <Card key={brewery.id}>
                <Card.Content>
                  {brewery.name}
                </Card.Content>
                <Image src={brewery.images} />
                <Card.Content>
                  {brewery.description}
                </Card.Content>
                <Button>
                  View Brewery
                </Button>
              </Card>
            ) }
          </Card.Group>
      </Container>
    )
  }
}

export default Breweries;