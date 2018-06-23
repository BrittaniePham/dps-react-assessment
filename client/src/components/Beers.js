import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Image } from 'semantic-ui-react';
// import ReactPaginate from 'react-paginate';

class Beers extends React.Component {
  state = { beers: { entries: [] } }

  componentDidMount() {
    axios.get('/api/all_beers?page=1&per_page=9') //?page=1&per_page=9
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
                {/* <Button>
                  View Beer
                </Button> */}
                <Link to={`/beer/${beer.name}`}>
                  View Beer
                </Link>
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