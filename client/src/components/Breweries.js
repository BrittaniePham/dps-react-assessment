import React from 'react';
import axios from 'axios';
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';
import { ButtonLink } from '../styles/commonStyles'

const BreweryImage = (brewery) => {

  if (typeof(brewery.images) !== "undefined") {
    return(
      <Image src={brewery.images.medium} />
    )
    // console.log("worked!")
  }else {
    return(
      <Image src='https://rafver.is/wp-content/uploads/2016/05/no-image.jpg' />
    )
    // console.log("no error but undefined!")
  }
}

class Breweries extends React.Component {
  state = { breweries: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({ breweries: res.data }) 
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
              <Card raised key={brewery.id}>
                <Card.Content>
                  <Card.Header>
                    {brewery.name}
                  </Card.Header>
                  { BreweryImage(brewery) }
                  {/* <Image src={brewery.images.icon} /> */}
                  <Card.Description>
                    {brewery.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <ButtonLink 
                  href={`/brewery/${brewery.name}`}
                  // target="_blank"
                  rel="noopener norefferer"
                >
                  View Brewery
                </ButtonLink>
                </Card.Content>
              </Card>
            ) }
          </Card.Group>
      </Container>
    )
  }
}

export default Breweries;