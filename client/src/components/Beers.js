import React from 'react';
import axios from 'axios';
import { Container, Header, Card, Image } from 'semantic-ui-react';
import { ButtonLink } from '../styles/commonStyles'

// import ReactPaginate from 'react-paginate';

class Beers extends React.Component {
  state = { beers: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_beers') //?page=1&per_page=9
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
              <Card raised key={beer.id}>
                <Card.Content>
                  <Card.Header>
                    {beer.name}
                  </Card.Header>
                  <Card.Description>
                    {beer.description}
                  </Card.Description>
                  {/* <Button>
                    View Beer
                  </Button> */}
                </Card.Content>
                <Card.Content extra>
                  <ButtonLink 
                    href={`/beer/${beer.name}`}
                    rel="noopener norefferer"
                  >
                    View Beer
                  </ButtonLink>
                </Card.Content>
              </Card>
            ) }
          </Card.Group>

          {/* pagination attempt */}
          {/* <div className="commentBox">
            <ReactPaginate previousLabel={"previous"}
                          nextLabel={"next"}
                          // breakLabel={<a href="">...</a>}
                          // breakClassName={"break-me"}
                          pageCount={this.state.beers.total_pages}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={2}
                          // onPageChange={this.handlePageClick}
                          // containerClassName={"pagination"}
                          // subContainerClassName={"pages pagination"}
                          // activeClassName={"active"} 
              />
            </div> */}
      </Container>
    )
  }
}

export default Beers;