import React from 'react';
import axios from 'axios';
import { Container, Header, Card, Button } from 'semantic-ui-react';

class Locations extends React.Component {
  state = { locations: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_locations')
      .then( res => {
        this.setState({ locations: res.data }) 
        console.log(res)
      })
  }

  render() {
    const { entries } = this.state.locations;
    // debugger
    return(
      <Container>
        <Header as="h1" textAlign="center">Locations</Header>
          <Card.Group itemsPerRow={3}>
            { entries.map( location =>
              <Card key={location.id}>
                <Card.Header>
                  {location.name}
                </Card.Header>
                <Card.Content>
                  {location.street_address}
                </Card.Content>
                <Card.Content>
                  {location.locality}, {location.region} {location.postal_code}
                </Card.Content>
                <Card.Content extra>
                  {location.website}
                </Card.Content>
              </Card>
            ) }
          </Card.Group>
      </Container>
    )
  }
}

export default Locations;