import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Image } from 'semantic-ui-react';

class Beer extends Component {
  state = { beer: { entries: [] } }

  componentDidMount() {
    axios.get(`/api/beer/${this.props.match.params.name}`)
      .then( res => this.setState({ beer: res.data }) )
  }

  // checkAvailability(beer) {
  //   if(typeof beer.available != "undefined") {
  //     beer.available = ' '
  //   }
  // }

  render() {
    const { entries } = this.state.beer
    return (
      // checkAvailability(beer)
      <Container>
        <Card.Group itemsPerRow={1}>
          { entries.map( beer =>
            <Card key={beer.id}>
              <Card.Header>
                {beer.name}
              </Card.Header>
              <Card.Meta>
                Alcohol By Volume: {beer.abv}
              </Card.Meta>
              <Card.Content>
                Category: {beer.style.category.name}
              </Card.Content>
              <Card.Content>
                description: {beer.description}
              </Card.Content>
              <Card.Content>
                style: {beer.style.name}
              <br />
              <br />
                {beer.style.description}
              </Card.Content>
              <Card.Content extra>
                Organic: {beer.is_organic}
              </Card.Content>
              {/* <Card.Content extra>
                Availability: {beer.available.description}
              </Card.Content> */}
            </Card>
          ) }
        </Card.Group>
      </Container>
    );
  }
}

export default Beer;