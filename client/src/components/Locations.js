import React from 'react';
import axios from 'axios';
import { Container, Header, Card } from 'semantic-ui-react';
import styled from 'styled-components'

export const StyledCard = styled(Card)`
  height: 200px;
`

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
              <StyledCard raised key={location.id}>
                <Card.Content>
                  <Card.Header>
                    {location.name}
                  </Card.Header>
                  <Card.Description>
                    {location.street_address}
                  </Card.Description>
                  <Card.Description>
                    {location.locality}, {location.region} {location.postal_code}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {location.website}
                </Card.Content>
              </StyledCard>
            ) }
          </Card.Group>
      </Container>
    )
  }
}

export default Locations;