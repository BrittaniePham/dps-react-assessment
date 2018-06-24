import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Image } from 'semantic-ui-react';

const BreweryImage = (brewery) => {

  if (typeof(brewery.images) !== "undefined") {
    return(
      <Image src={brewery.images.large} />
    )
    // console.log("worked!")
  }else {
    return(
      <Image src='https://rafver.is/wp-content/uploads/2016/05/no-image.jpg' />
    )
    // console.log("no error but undefined!")
  }
}

class Brewery extends Component {
  state = { brewery: { entries: [] } }

  componentDidMount() {
    axios.get(`/api/brewery/${this.props.match.params.name}`)
      .then( res => this.setState({ brewery: res.data }) )
  }

  render() {
    const { entries } = this.state.brewery
    return (
      // checkAvailability(beer)
      <Container>
        <Card.Group itemsPerRow={1}>
          { entries.map( brewery =>
            <Card key={brewery.id}>
              <Card.Header>
                {brewery.name}
              </Card.Header>
              <Card.Content>
                { BreweryImage(brewery) }
                <Card.Description>
                  {brewery.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {brewery.website}
              </Card.Content>
            </Card>
          ) }
        </Card.Group>
      </Container>
    );
  }
}

export default Brewery